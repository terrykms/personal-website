import EducationBox from "../education-box/education-box";

import classes from "./education.module.scss";

const Education = (props) => {
  const { data } = props;
  return (
    <section className={classes.education}>
      <h2>Education</h2>
      {data.map((education) => (
        <EducationBox key={education.school} education={education} />
      ))}
    </section>
  );
};

export default Education;
