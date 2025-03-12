import classes from "./about-me.module.scss";

const AboutMe = () => {
  return (
    <section className={classes.aboutme}>
      <h1>About Me</h1>
      <p>
        Hi &#128075; I'm Minseo. I'm currently studying in Nanyang Technological
        University (NTU). Passionate about software development and
        entrepreneurship, I'm always looking out for opportunities in how
        software platforms can add value to people's lives and solves their
        needs.
      </p>
      <p>
        The CN Yang Scholars' Programme in NTU has allowed me to explore various
        interests, such as research attachments pertaining to deep learning and
        neural networks, which were outside of my degree in Chemical
        Engineering.
      </p>
      <p>
        I eventually found my passion in software development, thus I am
        currently acquiring the various knowledge necessary and applying them
        through personal projects. Feel free to check out my blogs as I will be
        sharing my journey on software development and entrepreneurship.
      </p>
    </section>
  );
};

export default AboutMe;
