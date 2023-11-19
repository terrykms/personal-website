import { Fragment } from "react";
import Head from "next/head";

import { getMediumPosts } from "@/utils/utils";

import Introduction from "@/components/introduction/introduction";
import FeaturedPosts from "@/components/featured-posts/featured-posts";

const HomePage = ({ status, items }) => {
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
      <FeaturedPosts posts={items} />
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const { status, items } = await getMediumPosts();
  const latestThreeItems = items.slice(0, 3);
  if (status === "error") {
    return {
      props: {
        status,
        url: "https://medium.com/@minseo_kim",
      },
    };
  }
  return {
    props: {
      status,
      items: latestThreeItems,
    },
    revalidate: 3600,
  };
};

export default HomePage;
