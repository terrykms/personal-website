import { getMediumPosts } from "@/lib/medium";
import BlogsContainer from "@/components/blogs/blogs-container/blogs-container";

const ArticlesPage = async () => {
  const { status, items } = await getMediumPosts();

  return (
    <div>
      <h1>Latest Articles</h1>
      {status === "ok" ? (
        <BlogsContainer posts={items} />
      ) : (
        <p>
          Error in retrieving articles, please visit{" "}
          <a href="https://medium.com/@minseo_kim">this Medium Feed</a> to check
          out more articles!
        </p>
      )}
    </div>
  );
};

export default ArticlesPage;
