import Link from "next/link";
import classes from "./not-found.module.scss";

export const metadata = {
  title: "Page not found",
};

const NotFound = () => {
  return (
    <section className={classes.notFound}>
      <h1>Page not found</h1>
      <p>
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <div className={classes.links}>
        <Link href="/">Back to home</Link>
        <Link href="/articles">Browse articles</Link>
      </div>
    </section>
  );
};

export default NotFound;
