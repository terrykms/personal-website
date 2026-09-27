import { getMediumPosts, getSingleMediumPost } from "@/lib/medium";
import BlogContent from "@/components/blogs/blog-content/blog-content";

export const generateMetadata = async ({ params }) => {
  const { postId } = await params;
  const postData = await getSingleMediumPost(postId);
  if (!postData) return {};

  const description = postData.description
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 160);

  return {
    title: postData.title,
    description,
    alternates: { canonical: postData.link.split("?")[0] },
  };
};

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
