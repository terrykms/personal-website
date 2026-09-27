export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/articles", label: "Articles" },
  { href: "/contact", label: "Contact" },
];

// Section links stay active on nested routes (e.g. /articles/[postId]).
export const isActiveLink = (pathName, href) =>
  href === "/"
    ? pathName === "/"
    : pathName === href || pathName.startsWith(`${href}/`);
