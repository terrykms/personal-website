import Image from "next/image";
import { Mail, ArrowUpRight } from "lucide-react";
import { socials } from "@/lib/socials";
import classes from "./page.module.scss";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Minseo Kim via email, LinkedIn, GitHub or Medium.",
};

const channels = [
  {
    icon: null,
    useMailIcon: true,
    label: "Email",
    handle: "minseokim.sg@gmail.com",
    href: "mailto:minseokim.sg@gmail.com",
    external: false,
  },
  ...socials.map((social) => ({ ...social, external: true })),
];

const ContactPage = () => {
  return (
    <section>
      <h1>Get in touch</h1>
      <p className={classes.intro}>
        Open to opportunities, collaborations, or just a coffee chat. Pick
        whichever channel works best for you.
      </p>
      <div className={classes.channels}>
        {channels.map(({ icon, useMailIcon, label, handle, href, external }) => (
          <a
            key={label}
            href={href}
            className={classes.row}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
          >
            <div className={classes.iconWrap}>
              {useMailIcon ? (
                <Mail size={22} strokeWidth={1.5} />
              ) : (
                <Image src={icon} alt={label} width={22} height={22} />
              )}
            </div>
            <div className={classes.text}>
              <span className={classes.label}>{label}</span>
              <span className={classes.handle}>{handle}</span>
            </div>
            <ArrowUpRight size={18} className={classes.arrow} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default ContactPage;
