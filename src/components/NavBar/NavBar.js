import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [burgerAnimation, setburgerAnimation] = useState(false);

  const burgerChangeHandler = () => {
    setburgerAnimation(!burgerAnimation);
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="logo">
          <h1>Srikanth</h1>
        </div>
        <div className="nav-links">
          <ul className={`${burgerAnimation ? "active" : ""}`}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/certifications">Certifications</Link>
            </li>
          </ul>
        </div>
        <div
          className={`burger ${burgerAnimation ? "changeBurger" : ""}`}
          onClick={burgerChangeHandler}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
