import React, { useEffect, useRef } from 'react';
import './Card.css';
import Typed from 'typed.js';
import avatar from '../../img/avatar.jpg'; // Ton image de profil

const Card = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["LEAD", "ENGINEER", "AUTOMATION", "CONSULTANT"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="card-container">
      <img src={avatar} alt="avatar" className="card-avatar" />
      <h2 className="card-name">Loïc Deruy</h2>
      <p className="card-title">
        QA <span ref={typedRef} className="typing" />
      </p>
      <p className="card-location">Paris, France</p>
      <div className="card-socials">
        <a href="#"><i className="fab fa-dribbble"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-github"></i></a>
        <a href="#"><i className="fab fa-envelope"></i></a>
      </div>
      <button className="card-button">Let's Talk</button>
    </div>
  );
};

export default Card;

