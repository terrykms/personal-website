import ExperienceBox from "../experience-box/experience-box";
import classes from "./experiences.module.scss";

const Experiences = (props) => {
  const { data } = props;
  const experiences = data.experiences;

  return (
    <section>
      <h2>Experiences</h2>
      <div className={classes.experiences}>
        {experiences.map((experience) => (
          <ExperienceBox experience={experience} key={experience.position} />
        ))}
      </div>
    </section>
  );
};

export default Experiences;
