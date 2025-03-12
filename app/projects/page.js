import ProjectContainer from "@/components/project-container/project-container";
import { getJSONData } from "../../lib/utils";
import { Fragment } from "react";

export const metadata = {
  title: "Projects by Minseo",
  description:
    "Passionate about software development and entrepreneurship, I'm always looking out for opportunities in how software platforms can add value to people's lives and solves their needs.",
};

const ProjectPage = () => {
  const projectsData = getJSONData("projects.json");

  return (
    <Fragment>
      <h1>Projects</h1>
      <ProjectContainer data={projectsData.projects} />
    </Fragment>
  );
};

export default ProjectPage;
