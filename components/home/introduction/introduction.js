import Image from "next/image";
import classes from "./introduction.module.scss";
import Link from "next/link";

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
        <p>Welcome to my page!</p>
        <p>
          I'm a final-year undergraduate at{" "}
          <span className={classes.highlight}>
            Nanyang Technological University
          </span>
          , majoring in Chemical and Biomolecular Engineering.
        </p>
        <p>
          Beyond my core studies, I've developed a strong interest in software
          development, which I've pursued through{" "}
          <Link href="/projects">personal projects</Link> and{" "}
          <Link href="/articles">technical writing</Link> to consolidate and
          share my learning.
        </p>
        <p>
          Currently, I'm working at{" "}
          <span className={classes.highlight}>U-Reg</span> as a{" "}
          <span className={classes.highlight}>Software Engineering Intern</span>
          , where I contribute to building AI-integrated features across the
          platform.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
