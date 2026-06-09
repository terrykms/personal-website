import { ExternalLink } from "lucide-react";
import classes from "./project-box.module.scss";

const ProjectBox = ({ project }) => {
  const { title, summary, keywords, link } = project;
  return (
    <div className={classes.project}>
      <div className={classes.header}>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className={classes.titleLink}>
            <h2>{title}</h2>
            <ExternalLink size={18} />
          </a>
        ) : (
          <h2>{title}</h2>
        )}
      </div>
      <div className={classes.summary}>{summary}</div>
      <div className={classes.keywords}>
        {keywords.map((keyword, i) => (
          <span key={i}>
            {i > 0 && <span className={classes.dot}> · </span>}
            {keyword}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectBox;
