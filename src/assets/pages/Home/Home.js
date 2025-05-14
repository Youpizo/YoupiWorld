import React from 'react';
import Card from "../../components/Card/Card.js";
import HeroSection from "../../components/HeroSection/HeroSection.js";
import Header from '../../components/Header/Header.js';
import Footer from "../../components/Footer/Footer.js";
import "./Home.css";

const HomePage = () => {
  return (
    <div className="main-container">
      <Header />
      <div className="content-container">
        <Card />
        <HeroSection />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
