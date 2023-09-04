import { Fragment, useRef, useState, useEffect } from "react";

import classes from "./contact-form.module.scss";
import Notification from "../notification/notification";

const sendContactData = async (contactDetails) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
};

const ContactForm = () => {
  const emailInput = useRef();
  const nameInput = useRef();
  const subjectInput = useRef();
  const messageInput = useRef();

  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const sendMessageHandler = async (event) => {
    event.preventDefault();
    setRequestStatus("pending");

    try {
      await sendContactData({
        email: emailInput.current.value,
        name: nameInput.current.value,
        subject: subjectInput.current.value,
        message: messageInput.current.value,
      });
      setRequestStatus("success");
    } catch (error) {
      // error posting message
      setRequestError(error.message);
      setRequestStatus("error");
    }
  };

  let notification;

  if (requestStatus === "pending") {
    notification = {
      title: "Sending...",
      status: requestStatus,
      message: "Message sending...",
    };
  } else if (requestStatus === "success") {
    notification = {
      title: "Success!",
      status: requestStatus,
      message: "Message sent successfully!",
    };
  } else if (requestStatus === "error") {
    notification = {
      title: "Error!",
      status: requestStatus,
      message: "Message failed to send.",
    };
  }
  return (
    <div className={classes.container}>
      <div>
        <h1>How can I help?</h1>
        <p>
          Feel free to drop me a message for any queries, opportunities, or even
          a simple coffee chat!
        </p>
      </div>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailInput} />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required ref={nameInput} />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" required ref={subjectInput} />
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows="5"
            required
            ref={messageInput}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
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

export default ContactForm;
