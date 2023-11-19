import Link from "next/link";
import { Fragment } from "react";
import FeaturedPostBox from "../featured-post-box/featured-post-box";
import classes from "./featured-posts.module.scss";

const FeaturedPosts = ({ posts }) => {
  if (posts.length === 0) {
    return;
  }

  return (
    <div className={classes.container}>
      <h2>My Latest Articles</h2>
      <div className={classes.posts}>
        {posts.map((post) => (
          <FeaturedPostBox post={post} />
        ))}
      </div>
      <div className={classes.button}>
        <Link href="/articles">View More Articles</Link>
      </div>
    </div>
  );
};

export default FeaturedPosts;
