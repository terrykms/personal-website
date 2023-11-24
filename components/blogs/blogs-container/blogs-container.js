import Link from "next/link";
import BlogBox from "../blog-box/blog-box";
import classes from "./blogs-container.module.scss";

const BlogsContainer = ({ posts, feed, categories }) => {
  return (
    <div className={classes.container}>
      <div className={classes.posts}>
        {posts.map((post) => {
          return <BlogBox post={post} key={post.postId} />;
        })}
      </div>
      <div className={classes.search}>
        <h3>Browse by Category</h3>
        <ul>
          {Object.keys(categories).map((key, index) => {
            return (
              <li key={index}>
                <Link
                  href={{
                    pathname: "/articles",
                    query: { category: key },
                  }}
                  key={key}
                >
                  {key} [{categories[key]}]
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default BlogsContainer;
