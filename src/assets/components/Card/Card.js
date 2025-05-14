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
        <a href="https://www.linkedin.com/in/lo%C3%AFc-deruy-36141a161/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>
        <a href="loic.deruy@sfr.fr" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-envelope"></i></a>
        <a href="https://github.com/Youpizo" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
      </div>
      <button className="card-button">Let's Talk</button>
    </div>
  );
};

export default Card;

