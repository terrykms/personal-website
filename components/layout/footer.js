import Image from "next/image";
import classes from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.logos}>
        <a
          href="https://www.linkedin.com/in/minseo-kim-60a272202/"
          target="_blank"
        >
          <Image
            src={"/icons/linkedin.svg"}
            alt="LinkedIn Logo"
            width={40}
            height={40}
          />
        </a>
        <a href="https://github.com/terrykms" target="_blank">
          <Image
            src={"/icons/github.svg"}
            alt="Github Logo"
            width={40}
            height={40}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
