import Link from "next/link";
import Image from "next/image";

import classes from "./blog-box.module.scss";

const BlogBox = ({ post }) => {
  const formattedDate = new Date(post.pubDate).toLocaleDateString("en-UK", {
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
      <Link className={classes.image} href={`/articles/${postId}`}>
        <Image
          src={imagePath}
          alt={`Cover picture to the article "${post.title}".`}
          width={600}
          height={300}
          loader={loaderProp}
        />
      </Link>
      <div className={classes.description}>
        <span>{formattedDate}</span>
        <h2>{post.title}</h2>
      </div>
    </div>
  );
};

export default BlogBox;
