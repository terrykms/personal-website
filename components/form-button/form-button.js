import classes from "./form-button.module.scss";

const FormButton = (props) => {
  const { label, buttonDisabled } = props;
  console.log(buttonDisabled);
  return (
    <button className={classes.button} disabled={buttonDisabled}>
      {label}
    </button>
  );
};

export default FormButton;
