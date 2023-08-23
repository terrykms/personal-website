import Link from "next/link";

import classes from "./main-navigation.module.scss";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link href="/">Home</Link>
      <nav>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
