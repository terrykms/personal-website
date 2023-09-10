import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";

import FormInput from "../form-input/form-input";
import FormButton from "../form-button/form-button";
import Notification from "../notification/notification";

import classes from "./blog-comment-form.module.scss";

const sendCommentsData = async (commentDetails) => {
  const response = await fetch(`/api/blog/comment/${commentDetails.postId}`, {
    method: "POST",
    body: JSON.stringify(commentDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
};

const BlogCommentForm = () => {
  const nameInput = useRef();
  const emailInput = useRef();
  const commentInput = useRef();

  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState();
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const router = useRouter();
  const { postId } = router.query;

  const sendCommentHandler = async (event) => {
    event.preventDefault();
    setRequestStatus("pending");
    setButtonDisabled(true);
    const now = new Date();
    const currentTime = now.getTime();
    const timezoneOffset = now.getTimezoneOffset();

    try {
      await sendCommentsData({
        timestamp: currentTime,
        timezoneOffset,
        email: emailInput.current.value,
        name: nameInput.current.value,
        comment: commentInput.current.value,
        postId,
      });
      setRequestStatus("success");
    } catch (error) {
      // error posting message
      setRequestError(error.message);
      setRequestStatus("error");
    }
    setButtonDisabled(false);
    nameInput.current.value = "";
    emailInput.current.value = "";
    commentInput.current.value = "";
  };

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  let notification;

  if (requestStatus === "pending") {
    notification = {
      title: "Publishing...",
      status: requestStatus,
      message: "Sending Comments...",
    };
  } else if (requestStatus === "success") {
    notification = {
      title: "Success!",
      status: requestStatus,
      message: "Comment published successfully!",
    };
  } else if (requestStatus === "error") {
    notification = {
      title: "Error!",
      status: requestStatus,
      message: "Comment failed to publish.",
    };
  }

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h3>Leave a comment</h3>
        <span>Your email address will not be published.</span>
      </div>
      <form className={classes.form} onSubmit={sendCommentHandler}>
        <div className={classes.controls}>
          <FormInput
            id="name"
            label="Your Name"
            type="text"
            isRequired={true}
            innerRef={nameInput}
          />
          <FormInput
            id="email"
            label="Your Email"
            type="email"
            isRequired={true}
            innerRef={emailInput}
          />
        </div>
        <FormInput
          id="comment"
          label="Your Comment"
          isRequired={true}
          innerRef={commentInput}
          rows="5"
        />
        <div className={classes.actions}>
          <FormButton label="Post Comment" buttonDisabled={buttonDisabled} />
        </div>
      </form>
      {notification && (
        <Notification
          title={notification.title}
          status={notification.status}
          message={notification.message}
        />
      )}
    </div>
  );
};

export default BlogCommentForm;
