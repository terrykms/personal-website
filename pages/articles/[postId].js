import { Fragment } from "react";

import { getMediumPosts, getSingleMediumPost } from "@/utils/utils";
import Head from "next/head";
import BlogContent from "@/components/blogs/blog-content/blog-content";
// import BlogCommentForm from "@/components/blog-comment-form/blog-comment-form";
// import BlogComments from "@/components/blog-comments/blog-comments";

const BlogPost = (props) => {
  const { postData } = props;

  return (
    <Fragment>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <BlogContent post={postData} key={postData.postId} />
    </Fragment>
  );
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const postData = await getSingleMediumPost(params.postId);

  return {
    props: {
      postData,
    },
    revalidate: 3600,
  };
};

export const getStaticPaths = async () => {
  const { items } = await getMediumPosts();
  return {
    paths: items.map((item) => ({ params: { postId: item.postId } })),
    fallback: false,
  };
};

export default BlogPost;
