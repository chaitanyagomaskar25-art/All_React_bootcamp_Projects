import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <h2>Let's create something amazing.</h2>
          <p>Available for work</p>
        </div>

        <div className="footer-links">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#">Featured Projects</a></li>
            <li><a href="">Experience</a></li>
            <li><a href="">Tools used</a></li>
            <li><a href="">Current Learning</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Your Name</p>
        <p>Email: hello@email.com</p>
      </div>
    </footer>
  );
};

export default Footer;