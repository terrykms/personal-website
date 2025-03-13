"use client";
import { Fragment, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import Hamburger from "./hamburger/hamburger";
import classes from "./main-navigation.module.scss";

const MobileNavigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathName = usePathname();

  const navBarToggleHandler = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    setIsNavOpen(false);
  }, [pathName]);
  return (
    <Fragment>
      <Hamburger onClick={navBarToggleHandler} />
      {isNavOpen && (
        <ul className={classes.mobile_navlinks}>
          <li>
            <Link className={pathName === "/" ? classes.active : ""} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className={pathName === "/about" ? classes.active : ""}
              href="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={pathName === "/projects" ? classes.active : ""}
              href="/projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className={pathName === "/articles" ? classes.active : ""}
              href="/articles"
            >
              Articles
            </Link>
          </li>
          <li>
            <Link
              className={pathName === "/contact" ? classes.active : ""}
              href="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </Fragment>
  );
};

export default MobileNavigation;
