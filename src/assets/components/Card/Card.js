import React from 'react';
import './Card.css';
import avatar from '../../img/avatar.jpg'; // Remplace par ton image

const Card = () => {
  return (
    <div className="card-container">
      <img src={avatar} alt="avatar" className="card-avatar" />
      <h2 className="card-name">Loïc Dupont</h2>
      <p className="card-title">Développeur Frontend & UX Designer</p>
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
