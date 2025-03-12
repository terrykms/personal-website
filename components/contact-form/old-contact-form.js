"use client";
import { useRef, useState, useEffect } from "react";

import classes from "./contact-form.module.scss";
import Notification from "../notification/notification";
import FormInput from "../form-input/form-input";
import FormButton from "../form-button/form-button";

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
  const [buttonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const sendMessage = async (event) => {
    event.preventDefault();
    setRequestStatus("pending");
    setButtonDisabled(true);

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
    setButtonDisabled(false);

    emailInput.current.value = "";
    nameInput.current.value = "";
    subjectInput.current.value = "";
    messageInput.current.value = "";
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
        <p>
          Alternatively, you can drop me an email at{" "}
          <a href="mailto:minseokim.sg@gmail.com">minseokim.sg@gmail.com</a>, or
          drop me a DM on{" "}
          <a href="https://www.linkedin.com/in/minseokim-ms/" target="_blank">
            LinkedIn
          </a>
          .
        </p>
      </div>
      <form className={classes.form} action={sendMessage}>
        <div className={classes.controls}>
          <FormInput
            id="email"
            label="Your Email"
            type="email"
            isRequired={true}
            innerRef={emailInput}
          />
          <FormInput
            id="name"
            label="Your Name"
            type="text"
            isRequired={true}
            innerRef={nameInput}
          />
        </div>
        <FormInput
          id="subject"
          label="Subject"
          type="text"
          isRequired={true}
          innerRef={subjectInput}
        />
        <FormInput
          id="message"
          label="Your Message"
          isRequired={true}
          innerRef={messageInput}
          rows="5"
        />
        <div className={classes.actions}>
          <FormButton label="Send Message" buttonDisabled={buttonDisabled} />
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
