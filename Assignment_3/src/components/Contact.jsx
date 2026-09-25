import React from "react";
import Resume from "./Resume";

const Contact = () => {
  return (
    <>
        <section className="contact">
      <h2 className="section-title">Contact Me</h2>

      <p>Email: your@email.com</p>

      <div className="social-links">
        <a href="#">YouTube</a>
        <a href="#">Twitter</a>
        <a href="#">GitHub</a>
        <a href="#">LinkedIn</a>
      </div>
    </section>
    <Resume />
    </>
  );
};

export default Contact;