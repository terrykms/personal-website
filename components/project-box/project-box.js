import classes from "./project-box.module.scss";

const ProjectBox = (props) => {
  const { project } = props;
  const keywordsString = project.keywords.toString(", ");
  return (
    <div className={classes.project}>
      <h2>{project.title}</h2>
      <div className={classes.summary}>{project.summary}</div>
      <div className={classes.keywords}>{keywordsString}</div>
    </div>
  );
};

export default ProjectBox;
