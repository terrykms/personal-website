import BlogsContainer from "@/components/blogs-container/blogs-container";
import { getAllPostData } from "@/utils/utils";

const BlogsPage = (props) => {
  const { posts } = props;
  return (
    <div>
      <h1>Blogs</h1>
      <BlogsContainer data={posts} />
    </div>
  );
};

export const getStaticProps = async () => {
  const allPosts = await getAllPostData();

  return {
    props: {
      posts: allPosts,
    },
  };
};

export default BlogsPage;
