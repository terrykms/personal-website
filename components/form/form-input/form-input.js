import classes from "./form-input.module.scss";

const FormInput = (props) => {
  const { id, label, type, isRequired, innerRef, rows } = props;
  return (
    <div className={classes.control}>
      <label htmlFor={id}>{label}</label>
      {rows ? (
        <textarea
          id={id}
          name={id}
          rows={rows}
          required={isRequired}
          ref={innerRef}
        />
      ) : (
        <input
          type={type}
          name={id}
          id={id}
          required={isRequired}
          ref={innerRef}
        />
      )}
    </div>
  );
};

export default FormInput;
