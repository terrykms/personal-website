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
    <div className={classes.post}>
      <Link className={classes.image} href={`/articles/${post.postId}`}>
        <Image
          src={imagePath}
          alt={`Cover picture to the article "${post.title}".`}
          width={600}
          height={300}
        />
      </Link>
      <div className={classes.description}>
        <span>{formattedDate}</span>
        <h2>{post.title}</h2>
        <p className={classes.excerpt}>{post.excerpt}</p>
        {post.imageCreditSource && (
          <div className={classes.credit}>
            Image by <a href={post.imageCreditLink}>{post.imageCreditSource}</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogBox;
