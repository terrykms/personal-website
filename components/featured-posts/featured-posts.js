import { Fragment } from "react";
import classes from "./featured-posts.module.scss";

const FeaturedPosts = (props) => {
  const { posts } = props;
  if (posts.length === 0) {
    return;
  }
  return (
    <div className={classes.container}>
      <h2>Featured Posts</h2>
      <div className={classes.posts}>
        <div>hello</div>
        <div>hello2</div>
        <div>hello3</div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
