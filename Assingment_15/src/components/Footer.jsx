import React from "react";
import { NavLink } from "react-router";

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
            <li>
              <NavLink className="a" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="a" to="about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="a" to="project">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink className="a" to="contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Chaitanya</p>
        <p>Email: example@email.com</p>
      </div>
    </footer>
  );
};

export default Footer;
