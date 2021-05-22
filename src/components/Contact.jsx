import emailjs from "emailjs-com";
import React from "react";
import "./Contact.css";
export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s1dikqf",
        "template_1ishfxa",
        e.target,
        "user_12B61oqBbW0Cev38yBA85"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="container">
      <h1>Contact Me</h1>
      <div className="form">
        <form onSubmit={sendEmail}>
          <div className="form-control">
            <input type="text" placeholder="Name" name="name" />
          </div>
          <div className="form-control">
            <input type="email" placeholder="Email Address" name="email" />
          </div>
          <div className="form-control">
            <input type="text" placeholder="Subject" name="subject" />
          </div>
          <div className="form-control">
            <textarea
              id=""
              cols="30"
              rows="8"
              placeholder="Your message"
              name="message"
            ></textarea>
          </div>
          <div className="form-control">
            <input type="submit" className="btn" value="Send Message"></input>
          </div>
        </form>
      </div>
    </div>
  );
}
