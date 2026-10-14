import { sanitize } from "isomorphic-dompurify";
import { formatDate } from "@/lib/format";
import classes from "./blog-content.module.scss";

const BlogContent = ({ post }) => {
  const { title, pubDate, description, link } = post;
  const sanitizedDescription = sanitize(description);

  return (
    <article className={classes.content}>
      <h1 className={classes.title}>{title}</h1>
      <span className={classes.date}>{formatDate(pubDate)}</span>
      <div dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
      <span className={classes.end}></span>
      <p className={classes.articleFooter}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {title}
        </a>{" "}
        was originally published on{" "}
        <a
          href="https://medium.com/@minseo_kim"
          target="_blank"
          rel="noopener noreferrer"
        >
          Medium
        </a>
        .
      </p>
    </article>
  );
};

export default BlogContent;
