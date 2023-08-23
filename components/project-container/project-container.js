import ProjectBox from "@/components/project-box/project-box";

import classes from "./project-container.module.scss";

const ProjectContainer = (props) => {
  const { data } = props;
  return (
    <div className={classes.container}>
      {data.map((project) => (
        <ProjectBox project={project} key={project.title} />
      ))}
    </div>
  );
};

export default ProjectContainer;
