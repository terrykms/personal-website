import Link from "next/link";
import MobileNavigation from "./mobile-navigation";

import classes from "./main-navigation.module.scss";

const MainNavigation = () => {
  return (
    <nav className={classes.header}>
      <Link className={classes.index} href="/">
        Home
      </Link>
      <ul className={classes.navlinks}>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/articles">Articles</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <MobileNavigation />
    </nav>
  );
};

export default MainNavigation;
