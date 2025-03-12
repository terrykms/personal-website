import Link from "next/link";
import classes from "./blog-box.module.scss";

const BlogBox = ({ post }) => {
  const { title, pubDate, thumbnail, postId } = post;

  const formattedDate = new Date(pubDate).toLocaleDateString("en-UK", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = thumbnail;

  return (
    <div className={classes.post}>
      <Link className={classes.image} href={`/articles/${postId}`}>
        <img
          src={imagePath}
          alt={`Cover picture to the article "${title}".`}
          width={600}
          height={300}
        />
      </Link>
      <div className={classes.description}>
        <h2>{title}</h2>
        <div className={classes.date}>{formattedDate}</div>
      </div>
    </div>
  );
};

export default BlogBox;
