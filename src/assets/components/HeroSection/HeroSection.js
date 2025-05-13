// src/components/HeroSection.jsx
import React from 'react';
import './HeroSection.css';
import Slide from '../Slide/Slide.js';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1>
          Transforming Your <br /> Ideas into <span className="highlight">Reality</span>
        </h1>
        <p>
          Passionate about creating intuitive and engaging user experiences. <br />
          Specialize in transforming ideas into beautifully crafted products.
        </p>
      </div>

      <div className="stats">
        <div className="stat">
          <h2>+12</h2>
          <p>Years of <br /> Experience</p>
        </div>
        <div className="stat">
          <h2>+46</h2>
          <p>Projects <br /> Completed</p>
        </div>
        <div className="stat">
          <h2>+20</h2>
          <p>Worldwide <br /> Clients</p>
        </div>
      </div>

      <div className="buttons">
        <button className="btn primary">Let’s Talk</button>
        <button className="btn secondary">My Work →</button>
      </div>
      <div ClassName="slide-content">
      <Slide />
      </div>
    </section>
  );
};

export default HeroSection;

