import React from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">🎓 Student Portal</h2>
      <div className="nav-links">
        <NavLink to="/" end className="nav-link">
          Home
        </NavLink>
        <NavLink to="/student" className="nav-link">
          Student
        </NavLink>
        <NavLink to="/counter" className="nav-link">
          Counter
        </NavLink>
      </div>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;