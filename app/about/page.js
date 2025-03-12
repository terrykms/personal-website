import { Fragment } from "react";
import { getJSONData } from "../../lib/utils";

import AboutMe from "@/components/about-me/about-me";
import Experiences from "@/components/experiences/experiences";
import Education from "@/components/education/education";
import Head from "next/head";

const AboutPage = () => {
  const experienceData = getJSONData("experiences.json");
  const educationData = getJSONData("education.json");

  return (
    <Fragment>
      <Head>
        <title>About Minseo</title>
        <meta
          name="description"
          content="Passionate about software development and entrepreneurship, I'm always looking out for opportunities in how software platforms can add value to people's lives and solves their needs."
        />
      </Head>
      <AboutMe />
      <Experiences data={experienceData.experiences} />
      <Education data={educationData.education} />
    </Fragment>
  );
};

export default AboutPage;
