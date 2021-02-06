import React, { useState } from "react";
import NavBarStyles from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [burgerAnimation, setburgerAnimation] = useState(false);

  const burgerChangeHandler = () => {
    setburgerAnimation(!burgerAnimation);
  };

  return (
    <div className={NavBarStyles.navbar_container}>
      <nav className={NavBarStyles.navbar}>
        <div className={NavBarStyles.logo}>
          <h1>
            <a href="#home">Srikanth</a>
          </h1>
        </div>
        <div className={NavBarStyles.nav_links}>
          <ul className={`${burgerAnimation ? NavBarStyles.active : ""}`}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#certifications">Certifications</a>
            </li>
          </ul>
        </div>
        <div
          className={`${NavBarStyles.burger} ${
            burgerAnimation ? NavBarStyles.changeBurger : ""
          }`}
          onClick={burgerChangeHandler}
        >
          <div className={NavBarStyles.bar1}></div>
          <div className={NavBarStyles.bar2}></div>
          <div className={NavBarStyles.bar3}></div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
