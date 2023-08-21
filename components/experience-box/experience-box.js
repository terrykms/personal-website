import Image from "next/image";
import classes from "./experience-box.module.scss";

const ExperienceBox = (props) => {
  const { experience } = props;
  return (
    <div className={classes.box}>
      <div className={classes.image}>
        <Image
          src={`/images/about/${experience.image}`}
          alt={experience.company}
          width={70}
          height={70}
        />
      </div>
      <div className={classes.content}>
        <div className={classes.header}>
          <h3>{experience.position}</h3>
          <span>{experience.company}</span>
          <span>
            {experience.startDate} - {experience.endDate}
          </span>
        </div>
        <ul>
          {experience.descriptions.map((description) => (
            <li key={description}>{description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceBox;
