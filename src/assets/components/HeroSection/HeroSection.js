// src/components/HeroSection.jsx
import React from 'react';
import './HeroSection.css';
import Slide from '../Slide/Slide';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1>
          Enabling Continuous Delivery <br /> with Continuous <span className="highlight">Quality</span>
        </h1>
        <p>
          Ensuring every feature is reliable, testable, and ready to scale. <br />
          Passionate about building seamless user experiences.
        </p>
      </div>

      <div className="stats">
        <div className="stat">
          <h2>+3</h2>
          <p>Years of <br /> Experience</p>
        </div>
        <div className="stat">
          <h2>+25</h2>
          <p>Projects <br /> Completed</p>
        </div>
        <div className="stat">
          <h2>+15</h2>
          <p>Worldwide <br /> Clients</p>
        </div>
      </div>

      <div className="buttons">
        <button className="btn primary">Let’s Talk</button>
        <button className="btn secondary">My Work →</button>
      </div>

      <div className="slide-content">
        <Slide />
      </div>
    </section>
  );
};

export default HeroSection;


