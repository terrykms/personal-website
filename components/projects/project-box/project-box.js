import classes from "./project-box.module.scss";

const ProjectBox = (props) => {
  const { project } = props;
  const keywordsArray = project.keywords;
  return (
    <div className={classes.project}>
      <h2>{project.title}</h2>
      <div className={classes.summary}>{project.summary}</div>
      <div className={classes.keywords}>
        {keywordsArray.map((keyword, i) => (
          <span className={classes.keyword} key={i}>
            {keyword}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectBox;
