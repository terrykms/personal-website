import fs from "fs";
import path from "path";
import matter from "gray-matter";

const jsonDirectory = path.join(process.cwd(), "data");
const postsDirectory = path.join(process.cwd(), "data", "blog");

export const getJSONData = (filename) => {
  const filePath = path.join(jsonDirectory, filename);
  const fileContent = fs.readFileSync(filePath);

  return JSON.parse(fileContent);
};

export const getPostsFiles = () => {
  const postFiles = fs.readdirSync(postsDirectory);
  return postFiles.map((postFile) => postFile.replace(".md", ""));
};

export const getPostData = async (postId) => {
  const fullPath = path.join(postsDirectory, `${postId}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    postId,
    content,
    ...data,
  };
};

export const getAllPostData = async () => {
  const postFiles = getPostsFiles();
  const allPosts = await Promise.all(
    postFiles.map(async (postFile) => await getPostData(postFile))
  );

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
};

export const getMediumPosts = async () => {
  const rssToJsonApiCall =
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40minseo_kim";
  const response = await fetch(rssToJsonApiCall);
  const { status, feed, items } = await response.json();
  const modifiedItems = items.map((item) => {
    const postId = item.title
      .toLowerCase()
      .split(" ")
      .join("-")
      .replace(":", "");
    return { ...item, postId };
  });
  return { status, feed, items: modifiedItems };
};

export const getSingleMediumPost = async (postId) => {
  const { items } = await getMediumPosts();
  for (let i = 0; i < items.length; i++) {
    if (postId !== items[i].postId) continue;
    return items[i];
  }
};
