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
    <div className={classes.post}>
      <div className={classes.image}>
        <Image
          src={imagePath}
          alt={`Cover picture to the article "${title}".`}
          fill
          sizes="(min-width: 768px) 300px, 100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <div className={classes.description}>
        <Link href={`/articles/${postId}`}>
          <h3>{title}</h3>
        </Link>
        <span>{formattedDate}</span>
      </div>
    </div>
  );
};

export default FeaturedPostBox;
