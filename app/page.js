import { Fragment } from "react";
import Head from "next/head";

import Introduction from "@/components/introduction/introduction";
import FeaturedPosts from "@/components/featured-posts/featured-posts";

const HomePage = async () => {
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
      <FeaturedPosts />
    </Fragment>
  );
};

export default HomePage;
