import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/format";
import classes from "./blog-box.module.scss";

const BlogBox = ({ post, headingLevel: Heading = "h2" }) => {
  const { title, pubDate, thumbnail, postId } = post;

  return (
    <Link href={`/articles/${postId}`} className={classes.post}>
      {thumbnail && (
        <div className={classes.image}>
          <Image
            src={thumbnail}
            alt={`Cover picture to the article "${title}".`}
            fill
            sizes="(min-width: 768px) 160px, 120px"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      )}
      <div className={classes.description}>
        <Heading className={classes.title}>{title}</Heading>
        <div className={classes.date}>{formatDate(pubDate)}</div>
      </div>
    </Link>
  );
};

export default BlogBox;
