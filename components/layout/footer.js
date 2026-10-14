import Image from "next/image";
import { socials } from "@/lib/socials";
import classes from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.inner}>
        <div className={classes.logos}>
          {socials.map(({ icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={icon} alt={label} width={40} height={40} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
