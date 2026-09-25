import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const isActiveClass = ({ isActive }) => ({
    color: isActive ? "blue" : "",
    textDecoration: isActive ? "underline": "",
  });
  return (
    <nav className="nav-links">
      <NavLink style={isActiveClass} className="a" to="/">
        Home
      </NavLink>
      <NavLink style={isActiveClass} className="a" to="about">
        About
      </NavLink>
      <NavLink style={isActiveClass} className="a" to="project">
        Projects
      </NavLink>
      <NavLink style={isActiveClass} className="a" to="contact">
        Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;
