import Link from "next/link";
import Image from "next/image";

import classes from "./blog-box.module.scss";

const BlogBox = (props) => {
  const { post } = props;
  const formattedDate = new Date(post.date).toLocaleDateString("en-UK", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const imagePath = `/images/blogs/${post.postId}/${post.image}`;

  return (
    <Link className={classes.post} href={`/blog/${post.postId}`}>
      <div className={classes.image}>
        <Image
          src={imagePath}
          alt={`Cover picture to the blog "${post.title}".`}
          width={600}
          height={300}
        />
      </div>
      <div className={classes.description}>
        <span>{formattedDate}</span>
        <h2>{post.title}</h2>
        <p className={classes.excerpt}>{post.excerpt}</p>
      </div>
    </Link>
  );
};

export default BlogBox;
