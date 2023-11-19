import { sanitize } from "isomorphic-dompurify";
import classes from "./blog-content.module.scss";

const BlogContent = ({ post }) => {
  const formattedDate = new Date(post.pubDate).toLocaleDateString("en-UK", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const sanitizedDescription = sanitize(post.description);

  return (
    <article className={classes.content}>
      <h1 className={classes.title}>{post.title}</h1>
      <span className={classes.date}>{formattedDate}</span>
      <div dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
      <span className={classes.end}></span>
      <p className={classes.articleFooter}>
        <a href={post.link} target="_blank">
          {post.title}
        </a>{" "}
        was originally published on{" "}
        <a href="https://medium.com/@minseo_kim" target="_blank">
          Medium
        </a>
        .
      </p>
    </article>
  );
};

export default BlogContent;
