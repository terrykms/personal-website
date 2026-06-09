import Link from "next/link";
import Image from "next/image";
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
    <Link href={`/articles/${postId}`} className={classes.post}>
      {imagePath && (
        <div className={classes.image}>
          <Image
            src={imagePath}
            alt={`Cover picture to the article "${title}".`}
            fill
            sizes="(min-width: 768px) 160px, 120px"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      )}
      <div className={classes.description}>
        <h2>{title}</h2>
        <div className={classes.date}>{formattedDate}</div>
      </div>
    </Link>
  );
};

export default BlogBox;
