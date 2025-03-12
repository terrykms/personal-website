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
          I am an undergraduate in{" "}
          <span className={classes.highlight}>
            Nanyang Technological University
          </span>
          , currently taking a 2-year gap to complete my{" "}
          <span className={classes.highlight}>National Service (NS)</span> in
          Singapore.
        </p>
        <p>
          While my degree is in Chemical Engineering, I managed to deepen my
          knowledge in programming through{" "}
          <Link href="/projects">personal projects</Link> and consolidating my
          learnings through writing <Link href="/articles">articles</Link>{" "}
          during my time in NS.
        </p>
        <p>I will be back in August 2025 to complete my final year at NTU!</p>
      </div>
    </div>
  );
};

export default Introduction;
