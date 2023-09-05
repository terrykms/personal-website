import { Fragment } from "react";

import { getPostData, getPostsFiles } from "@/utils/utils";
import Head from "next/head";
import BlogContent from "@/components/blog-content/blog-content";

const BlogPost = (props) => {
  const { postData } = props;

  return (
    <Fragment>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={postData.excerpt} />
      </Head>
      <BlogContent post={postData} key={postData.postId} />
    </Fragment>
  );
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const postData = await getPostData(params.postId);

  return {
    props: {
      postData,
    },
  };
};

export const getStaticPaths = () => {
  const postFilenames = getPostsFiles();

  const postIds = postFilenames.map((filename) =>
    filename.replace(/\.md$/, "")
  );

  return {
    paths: postIds.map((postId) => ({ params: { postId: postId } })),
    fallback: false,
  };
};

export default BlogPost;
