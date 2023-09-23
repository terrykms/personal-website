import { useState } from "react";
import Link from "next/link";

import classes from "./main-navigation.module.scss";
import Hamburger from "./hamburger/hamburger";

const MainNavigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navBarToggleHandler = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <header className={classes.header}>
      <Link className={classes.index} href="/">
        Home
      </Link>
      <nav>
        <ul className={classes.navlinks}>
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
        <Hamburger onClick={navBarToggleHandler} />
        {isNavOpen && (
          <ul className={classes.navlinks_vertical}>
            <li>
              <Link href="/">Home</Link>
            </li>
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
        )}
      </nav>
    </header>
  );
};

export default MainNavigation;
