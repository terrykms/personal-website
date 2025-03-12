"use client";
import ReactDOM from "react-dom";

import classes from "./notification.module.scss";

const Notification = (props) => {
  const { title, message, status } = props;

  let statusClasses = "";
  switch (status) {
    case "success":
      statusClasses = classes.success;
      break;
    case "error":
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
