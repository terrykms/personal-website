import Link from "next/link";
import { getMediumPosts } from "@/lib/medium";
import BlogBox from "@/components/blogs/blog-box/blog-box";
import classes from "./featured-posts.module.scss";

const FeaturedPosts = async () => {
  const { items } = await getMediumPosts();
  const posts = items.slice(0, 3);
  if (posts.length === 0) {
    return null;
  }
  return (
    <div className={classes.container}>
      <h2>My Latest Articles</h2>
      <div className={classes.posts}>
        {posts.map((post) => (
          <BlogBox post={post} headingLevel="h3" key={post.postId} />
        ))}
      </div>
      <div className={classes.button}>
        <Link href="/articles">View More Articles</Link>
      </div>
    </div>
  );
};

export default FeaturedPosts;
