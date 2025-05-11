import React from 'react';
import './Layout.css';
import HeaderNav from "../HeaderNav/HeaderNav.js";
import Footer from '../Footer/Footer.js';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <HeaderNav className="Header et Navigation" />
      
      <main>
        {children} {/* <-- C'est ici que tes pages vont s'afficher */}
      </main>

      <Footer className="footer" />
    </div>
  );
};

export default Layout;

