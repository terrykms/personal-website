import { Fragment } from "react";
import { getJSONData } from "../../lib/utils";

import AboutMe from "@/components/about/about-me/about-me";
import Experiences from "@/components/about/experiences/experiences";
import Education from "@/components/about/education/education";

const AboutPage = () => {
  const experienceData = getJSONData("experiences.json");
  const educationData = getJSONData("education.json");

  return (
    <Fragment>
      <AboutMe />
      <Experiences data={experienceData.experiences} />
      <Education data={educationData.education} />
    </Fragment>
  );
};

export default AboutPage;
