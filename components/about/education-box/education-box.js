import Image from "next/image";
import classes from "./education-box.module.scss";

const EducationBox = (props) => {
  const { education } = props;
  return (
    <div className={classes.box}>
      <div className={classes.image}>
        <Image
          src={`/images/about/${education.image}`}
          alt={education.school}
          width={70}
          height={70}
        />
      </div>
      <div className={classes.content}>
        <div className={classes.header}>
          <h3>{education.school}</h3>
          <span>{education.level}</span>
          <span>{education.grade}</span>
          <span>
            {education.startDate} - {education.endDate}
          </span>
        </div>

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
