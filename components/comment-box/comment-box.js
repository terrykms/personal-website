import classes from "./comment-box.module.scss";

const CommentBox = (props) => {
  const { data } = props;
  const timezoneConversion =
    (data.timezoneOffset - new Date().getTimezoneOffset()) * 60 * 1000;
  const localTimestamp = new Date(data.timestamp + timezoneConversion);
  const options = {
    dateStyle: "medium",
    timeStyle: "short",
  };
  const formattedDate = localTimestamp.toLocaleString("en-UK", options);

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <span className={classes.name}>{data.name}</span>
        <span className={classes.date}>{formattedDate}</span>
      </div>
      <div className={classes.comment}>{data.comment}</div>
      <span className={classes.divider}></span>
    </div>
  );
};

export default CommentBox;
