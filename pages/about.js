import { Fragment } from "react";
import { getJSONData } from "@/utils/utils";

import AboutMe from "@/components/about-me/about-me";
import Experiences from "@/components/experiences/experiences";

const AboutPage = (props) => {
  const { experienceData } = props;
  return (
    <Fragment>
      <AboutMe />
      <Experiences data={experienceData} />
    </Fragment>
  );
};

export const getStaticProps = () => {
  const experienceData = getJSONData("experiences.json");
  return {
    props: {
      experienceData: experienceData,
    },
  };
};

export default AboutPage;
