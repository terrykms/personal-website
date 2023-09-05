import Image from "next/image";
import ReactMarkdown from "react-markdown";
import classes from "./blog-content.module.scss";

const BlogContent = (props) => {
  const { post } = props;

  const formattedDate = new Date(post.date).toLocaleDateString("en-UK", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph;
      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/blogs/${post.postId}/${image.properties.src}`}
              alt={image.properties.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
  };

  return (
    <article className={classes.content}>
      <h1 className={classes.title}>{post.title}</h1>
      <span className={classes.date}>{formattedDate}</span>
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
};

export default BlogContent;
