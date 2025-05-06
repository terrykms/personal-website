import { Link } from "lucide-react";
import classes from "./project-box.module.scss";

const ProjectBox = ({ project }) => {
  const { title, summary, keywords, link } = project;
  return (
    <div className={classes.project}>
      <h2>{title}</h2>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {link}
        </a>
      )}
      <div className={classes.summary}>{summary}</div>
      <div className={classes.keywords}>
        {keywords.map((keyword, i) => (
          <span className={classes.keyword} key={i}>
            {keyword}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectBox;
