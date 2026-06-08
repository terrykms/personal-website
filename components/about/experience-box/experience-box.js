import Image from "next/image";
import classes from "./experience-box.module.scss";

const ExperienceBox = (props) => {
  const { experience } = props;
  return (
    <div className={classes.box}>
      <div className={classes.logo}>
        <div className={classes.logoInner}>
          <Image
            src={`/images/about/${experience.image}`}
            alt={experience.company}
            fill
            sizes="44px"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      <div className={classes.content}>
        <h3>{experience.position}</h3>
        <span className={classes.meta}>
          {experience.company} · {experience.startDate}–{experience.endDate}
        </span>
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
