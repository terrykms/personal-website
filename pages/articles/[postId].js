import { Fragment } from "react";

import { getMediumPosts, getSingleMediumPost } from "@/utils/utils";
import Head from "next/head";
import BlogContent from "@/components/blog-content/blog-content";
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
      {/* <BlogComments /> */}
      {/* <BlogCommentForm /> */}
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
  };
};

export const getStaticPaths = async () => {
  const { items } = await getMediumPosts();
  const postIds = items.map((item) =>
    item.title.toLowerCase().split(" ").join("-")
  );

  return {
    paths: postIds.map((postId) => ({ params: { postId: postId } })),
    fallback: false,
  };
};

export default BlogPost;
