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
