import { getMediumPosts, getSingleMediumPost } from "@/lib/medium";
import BlogContent from "@/components/blogs/blog-content/blog-content";

export const metadata = {};

const BlogPost = async ({ params }) => {
  const { postId } = await params;
  const postData = await getSingleMediumPost(postId);

  return <BlogContent post={postData} key={postId} />;
};

export const generateStaticParams = async () => {
  const { items } = await getMediumPosts();
  return items.map((item) => ({
    postId: item.postId,
  }));
};

export default BlogPost;
