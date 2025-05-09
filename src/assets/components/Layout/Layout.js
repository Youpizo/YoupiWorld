import React from 'react';
import './Layout.css';
import HeaderNav from "../HeaderNav/HeaderNav.js"; // Si tu as un composant Header
import Footer from '../Footer/Footer.js'; // Si tu as un composant Footer
import HomeContent from '../HomeContent/HomeContent.js'; // Ton composant de contenu principal

const Layout = () => {
  return (
    <div className="layout">
      <HeaderNav className="Header et Navigation" />
        <HomeContent />
      <Footer className="footer" />
    </div>
  );
};

export default Layout;
