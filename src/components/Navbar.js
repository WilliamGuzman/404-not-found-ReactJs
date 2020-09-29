import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {

  const [ click, setClick ] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <header className="header">
      <div className="menu-logo">
        <div className="logo">
          <h2>
            4
            <span>
              <i className="fas fa-globe-americas"></i>
            </span>
            4 Not Found
          </h2>
        </div>
      </div>
      <nav className={click ? "menu active" : "menu"}>
        <ul>
          <li className="menu-item">
            <a href="#!" className="menu-links">Home</a>
          </li>
          <li className="menu-item">
            <a href="#!" className="menu-links">About Us</a>
          </li>
          <li className="menu-item">
            <a href="#!" className="menu-links">Contact Us</a>
          </li>
        </ul>
      </nav>
      <div className="icon-mobile" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </header>
  );
};

export default Navbar;
