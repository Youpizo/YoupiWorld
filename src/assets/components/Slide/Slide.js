import React from 'react';
import '../Slide/Slide.css';

// Importer les images
import img1 from '../../img/Cypress.png';
import img2 from '../../img/github.png';
import img3 from '../../img/Playwright.png';
import img4 from '../../img/Gitlab.png';
import img5 from '../../img/jira.png';

const images = [img1, img2, img3, img4, img5];

const Slider = () => {
  // Dupliquer les images pour que le défilement boucle sans coupure
  const duplicatedImages = [...images, ...images];

  return (
    <div className="container">
      <div className="slider">
        <div className="slide-track">
          {duplicatedImages.map((img, index) => (
            <div className="slide" key={index}>
              <img
                src={img}
                width="250"
                height="100"
                alt={`slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;





