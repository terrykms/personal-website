import ProjectContainer from "@/components/projects/project-container/project-container";
import { getJSONData } from "../../lib/utils";
import { Fragment } from "react";

export const metadata = {
  title: "Projects",
  description:
    "Software, research and other projects by Minseo Kim.",
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
