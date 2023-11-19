import Image from "next/image";
import Link from "next/link";
import classes from "./featured-post.box.module.scss";

const FeaturedPostBox = ({ post }) => {
  const { title, description, pubDate, thumbnail } = post;
  const formattedDate = new Date(pubDate).toLocaleDateString("en-UK", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const loaderProp = ({ src }) => {
    return src;
  };

  const imagePath = post.thumbnail;
  const postId = post.title.toLowerCase().split(" ").join("-");
  return (
    <div className={classes.post}>
      <div className={classes.image}>
        <Image
          src={imagePath}
          alt={`Cover picture to the article "${title}".`}
          width={100}
          height={150}
          loader={loaderProp}
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
