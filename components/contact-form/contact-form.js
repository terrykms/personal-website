import { useRef } from "react";

import classes from "./contact-form.module.scss";

const ContactForm = () => {
  const emailInput = useRef();
  const nameInput = useRef();
  const messageInput = useRef();

  const sendMessageHandler = async (event) => {
    event.preventDefault();
    return;
  };
  return (
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
        <label htmlFor="message">Your Message</label>
        <textarea id="message" rows="5" required ref={messageInput}></textarea>
      </div>
      <div className={classes.actions}>
        <button>Send Message</button>
      </div>
    </form>
  );
};

export default ContactForm;
