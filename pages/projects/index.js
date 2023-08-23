import ProjectContainer from "@/components/project-container/project-container";
import { getJSONData } from "@/utils/utils";
import Head from "next/head";
import { Fragment } from "react";

const ProjectPage = (props) => {
  const { projectsData } = props;
  return (
    <Fragment>
      <Head>
        <title>Projects by Minseo</title>
        <meta
          name="description"
          content="Passionate about software development and entrepreneurship, I'm always looking out for opportunities in how software platforms can add value to people's lives and solves their needs."
        />
      </Head>
      <h1>Projects</h1>
      <ProjectContainer data={projectsData.projects} />
    </Fragment>
  );
};

export const getStaticProps = () => {
  const projectsData = getJSONData("projects.json");
  return {
    props: {
      projectsData,
    },
  };
};

export default ProjectPage;
