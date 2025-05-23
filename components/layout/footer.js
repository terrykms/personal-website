import Image from "next/image";
import classes from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.logos}>
        <a
          href="https://www.linkedin.com/in/minseokim-ms/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={"/icons/linkedin.svg"}
            alt="LinkedIn Logo"
            width={40}
            height={40}
          />
        </a>
        <a
          href="https://github.com/terrykms"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={"/icons/github.svg"}
            alt="Github Logo"
            width={40}
            height={40}
          />
        </a>
        <a
          href="https://medium.com/@minseo_kim"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={"/icons/medium.svg"}
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
