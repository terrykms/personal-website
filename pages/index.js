import { Fragment } from "react";
import Head from "next/head";

import Introduction from "@/components/introduction/introduction";
import FeaturedPosts from "@/components/featured-posts/featured-posts";

const posts = [];

const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <title>Minseo Kim</title>
        <meta
          name="description"
          content="I'm an entrepreneur in the making, driven by the belief that software solutions hold the key to reshaping how we work, communicate, and thrive as a society."
        />
      </Head>
      <Introduction />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
};

export default HomePage;
