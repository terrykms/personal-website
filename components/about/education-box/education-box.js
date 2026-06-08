import Image from "next/image";
import classes from "./education-box.module.scss";

const EducationBox = (props) => {
  const { education } = props;
  return (
    <div className={classes.box}>
      <div className={classes.logo}>
        <div className={classes.logoInner}>
          <Image
            src={`/images/about/${education.image}`}
            alt={education.school}
            fill
            sizes="44px"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      <div className={classes.content}>
        <h3>{education.school}</h3>
        <span className={classes.meta}>
          {education.level} · {education.startDate}–{education.endDate}
        </span>
        <span className={classes.meta}>{education.grade}</span>
        <ul>
          {education.descriptions.map((description) => (
            <li key={description}>{description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EducationBox;
