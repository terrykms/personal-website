"use client";
import { Fragment, useState } from "react";

import Hamburger from "./hamburger/hamburger";
import classes from "./main-navigation.module.scss";

const MobileNavigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navBarToggleHandler = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <Fragment>
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
            <Link href="/articles">Articles</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      )}
    </Fragment>
  );
};

export default MobileNavigation;
