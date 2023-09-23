import classes from "./hamburger.module.scss";

const Hamburger = ({ onClick }) => {
  return (
    <div className={classes.hamburger} onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;
