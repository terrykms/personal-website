import Link from "next/link";
import Image from "next/image";
import classes from "./featured-post.box.module.scss";

const FeaturedPostBox = ({ post }) => {
  const { title, pubDate, postId } = post;
  const formattedDate = new Date(pubDate).toLocaleDateString("en-UK", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = post.thumbnail;
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
        <h3>{title}</h3>
        <span className={classes.date}>{formattedDate}</span>
      </div>
    </Link>
  );
};

export default FeaturedPostBox;
