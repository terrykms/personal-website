import ProjectBox from "@/components/projects/project-box/project-box";

import classes from "./project-container.module.scss";

const ProjectContainer = ({ data }) => {
  return (
    <div className={classes.container}>
      {data.map((project) => (
        <ProjectBox project={project} key={project.title} />
      ))}
    </div>
  );
};

export default ProjectContainer;
