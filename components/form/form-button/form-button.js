"use client";
import { useFormStatus } from "react-dom";

import classes from "./form-button.module.scss";

const FormButton = ({ label }) => {
  const { pending } = useFormStatus();

  return (
    <button className={classes.button} disabled={pending}>
      {label}
    </button>
  );
};

export default FormButton;
