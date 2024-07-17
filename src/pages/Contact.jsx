import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Links from "../components/Links";
import gmail from "../assets/icons/4.png";
const Contact = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_o11klts",
        "template_tbal7uw",
        { to_name: "kartik", email },
        "7IM7BbROIn6xynsqW"
      )
      .then(
        (result) => {
          setEmail("Respose Submitted Successfully");
          setTimeout(() => {
            setEmail("");
          }, 2000);
        },
        (error) => {
          console.log("error");
          setEmail("Oops! Some error occured");
          setTimeout(() => {
            setEmail("");
          }, 2000);
        }
      );
  };
  return (
    <div className="container">
      <Links name="Contact" />
      <div className="contact-page-wrapper">
        <h1 className="primary-heading" style={{ textAlign: "center" }}>
          Contact Me
        </h1>
        <div className="whole-contact-content">
          <div className="media-link-wrapper">
            <a
              href="https://www.linkedin.com/in/kartik-bhardwaj-366206219/"
              target="_blank"
            >
              <img
                src="https://skillicons.dev/icons?i=linkedin"
                alt="linkedin logo"
              />
            </a>
            <a href="https://github.com/DevKartikBhardwaj" target="_blank">
              <img
                src="https://skillicons.dev/icons?i=github"
                alt="github logo"
              />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=developer.kartikbhardwaj@gmail.com"
              target="_blank"
            >
              <img
                src={gmail}
                alt="gmail logo"
                style={{ borderRadius: "6px" }}
              />
            </a>
          </div>
          <p>Or</p>
          <p>
            &#40; Please provide your email address, and I will contact you
            later. &#41;
          </p>
          <div className="email-wrapper">
            <input
              type="email"
              placeholder="Enter your email handle"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleSubmit}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
