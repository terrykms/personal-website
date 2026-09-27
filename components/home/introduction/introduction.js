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
        <p>
          I'm a software engineer at{" "}
          <span className={classes.highlight}>DBS Bank</span> in Singapore,
          working in Wealth Management Technology. Previously, I built
          end-to-end A/B testing for SearchSG at{" "}
          <span className={classes.highlight}>GovTech</span> and AI-assisted
          Source-of-Wealth investigations at{" "}
          <span className={classes.highlight}>U-Reg</span>.
        </p>
        <p>
          I graduated from Nanyang Technological University in 2026 with a
          degree in Chemical and Biomolecular Engineering, and made the move
          into software through internships,{" "}
          <Link href="/projects">personal projects</Link> and{" "}
          <Link href="/articles">technical writing</Link>.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
