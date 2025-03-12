"use client";
import ReactDOM from "react-dom";

import classes from "./notification.module.scss";

const Notification = (props) => {
  const { title, message, success } = props;

  let statusClasses = "";
  switch (success) {
    case 1:
      statusClasses = classes.success;
      break;
    case 0:
      statusClasses = classes.error;
      break;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <h3>{title}</h3>
      <span>{message}</span>
    </div>,
    document.getElementById("notifications")
  );
};

export default Notification;
