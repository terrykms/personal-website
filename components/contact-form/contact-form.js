"use client";
import { useActionState } from "react";
import { sendMessage } from "@/app/contact/actions";

import classes from "./contact-form.module.scss";
import Notification from "../notification/notification";
import FormInput from "../form-input/form-input";
import FormButton from "../form-button/form-button";

const initialState = {
  success: undefined,
  message: "",
};
const ContactForm = () => {
  const [state, formAction] = useActionState(sendMessage, initialState);
  let notification = undefined;

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
      <form action={formAction} className={classes.form}>
        <div className={classes.controls}>
          <FormInput
            id="email"
            label="Your Email"
            type="email"
            isRequired={true}
          />
          <FormInput
            id="name"
            label="Your Name"
            type="text"
            isRequired={true}
          />
        </div>
        <FormInput id="subject" label="Subject" type="text" isRequired={true} />
        <FormInput
          id="message"
          label="Your Message"
          isRequired={true}
          rows="5"
        />
        <div className={classes.actions}>
          <FormButton label="Send Message" />
        </div>
      </form>
      {notification && (
        <Notification
          title={notification.title}
          status={notification.status}
          message={state?.message}
        />
      )}
    </div>
  );
};

export default ContactForm;
