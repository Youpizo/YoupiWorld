// src/components/Header.jsx
import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="header">
        <button className={`burger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle Menu">
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </header>

      <nav className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleMenu}>&times;</button>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Accueil</Link></li>
          <li><Link to="/projects" onClick={toggleMenu}>Projets</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </nav>

      {menuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
    </>
  );
};

export default Header;
