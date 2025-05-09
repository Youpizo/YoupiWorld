import React, { useState } from 'react';
import './SideNav.css';
import { Link } from "react-router-dom";
import logo from "../../img/YoupiLogo1.png";

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="navbar">
        <div className="logo">
        <Link to="/">
        <img src={logo} alt="Youpi Logo" />
        </Link>
        </div>
        <button className="hamburger" onClick={toggleNav}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </header>

      <nav className={`side-nav ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleNav}>×</button>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/fabrication">Fabrication</a></li>
          <li><a href="/distributeurs">Distributeurs</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      {isOpen && <div className="overlay" onClick={toggleNav}></div>}
    </>
  );
};

export default SideNav;
