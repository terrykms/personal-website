"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks, isActiveLink } from "./nav-links";

import classes from "./main-navigation.module.scss";

const MainNavigation = () => {
  const pathName = usePathname();

  return (
    <nav className={classes.header}>
      <div className={classes.inner}>
        <Link className={classes.index} href="/">
          Minseo Kim
        </Link>
        <ul className={classes.navlinks}>
          {navLinks.map(({ href, label }) => {
            const isActive = isActiveLink(pathName, href);
            return (
              <li key={href}>
                <Link
                  className={isActive ? classes.active : ""}
                  aria-current={isActive ? "page" : undefined}
                  href={href}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default MainNavigation;
