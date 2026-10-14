import { notFound } from "next/navigation";
import { getMediumPosts, getSingleMediumPost } from "@/lib/medium";
import BlogContent from "@/components/blogs/blog-content/blog-content";

// Only the posts fetched at build time exist; anything else is a 404.
export const dynamicParams = false;

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
  if (!postData) notFound();

  return <BlogContent post={postData} key={postId} />;
};

export const generateStaticParams = async () => {
  const { items } = await getMediumPosts();
  return items.map((item) => ({
    postId: item.postId,
  }));
};

export default BlogPost;
