import classes from "./hamburger.module.scss";

const Hamburger = ({ onClick, isOpen }) => {
  return (
    <button
      className={`${classes.hamburger} ${isOpen ? classes.open : ""}`}
      onClick={onClick}
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={isOpen}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default Hamburger;
