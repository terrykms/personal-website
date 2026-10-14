import { notFound } from "next/navigation";
import { getMediumPosts, getSingleMediumPost } from "@/lib/medium";
import BlogContent from "@/components/blogs/blog-content/blog-content";

// Slugs not built at deploy time are rendered on demand, so posts published
// since the last deploy work; slugs that match no post 404 via notFound().

export const generateMetadata = async ({ params }) => {
  const { postId } = await params;
  const postData = await getSingleMediumPost(postId);
  if (!postData) return {};

  // Prefer Medium's one-line snippet over the whole feed item, which ends in
  // a "Continue reading on ..." link.
  const snippet = postData.description.match(
    /<p class="medium-feed-snippet">([\s\S]*?)<\/p>/
  );
  const description = (snippet ? snippet[1] : postData.description)
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 160);

  return {
    title: postData.title,
    description,
    alternates: { canonical: postData.link.split("?")[0] },
    openGraph: {
      type: "article",
      siteName: "Minseo Kim",
      title: postData.title,
      description,
      url: `/articles/${postId}`,
      publishedTime: new Date(postData.pubDate).toISOString(),
      ...(postData.thumbnail && { images: [postData.thumbnail] }),
    },
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
