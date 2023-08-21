import Image from "next/image";
import classes from "./introduction.module.scss";

const Introduction = () => {
  return (
    <div className={classes.intro}>
      <div className={classes.image}>
        <Image
          src="/images/profile/profile-picture-square-1024x1024.jpeg"
          alt="Picture of Minseo"
          width={400}
          height={400}
        />
      </div>
      <div className={classes.content}>
        <h1>Minseo Kim</h1>
        <p>
          I'm an entrepreneur in the making, driven by the belief that{" "}
          <span className={classes.highlight}>software solutions</span> hold the
          key to reshaping how we work, communicate, and thrive as a society.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
