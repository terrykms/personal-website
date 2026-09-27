import classes from "./about-me.module.scss";

const AboutMe = () => {
  return (
    <section className={classes.aboutme}>
      <h1>About Me</h1>
      <p>
        Hi &#128075; I'm Minseo, a software engineer at DBS Bank in Singapore,
        where I joined Wealth Management Technology as a Management Associate.
        I graduated from Nanyang Technological University (NTU) in 2026 with a
        degree in Chemical and Biomolecular Engineering.
      </p>
      <p>
        The CN Yang Scholars' Programme at NTU let me explore interests outside
        my degree, including research attachments in deep learning and neural
        networks. That's where I found my way into software development.
      </p>
      <p>
        Before DBS, I interned as a software engineer at GovTech and U-Reg,
        and I keep building personal projects on the side. I'm especially
        interested in how software products can meet real needs, which also
        draws me to entrepreneurship. I write about what I build and learn in
        my articles.
      </p>
    </section>
  );
};

export default AboutMe;
