import { Fragment } from "react";

import Introduction from "@/components/home/introduction/introduction";
import FeaturedPosts from "@/components/home/featured-posts/featured-posts";

const HomePage = async () => {
  return (
    <Fragment>
      <Introduction />
      <FeaturedPosts />
    </Fragment>
  );
};

export default HomePage;
