import React, { useEffect, useState } from 'react';
import '../Loader/Loader.css'; // Assurez-vous d'importer le fichier CSS pour le style

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler un délai de chargement (par exemple 3 secondes)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="loader-overlay">
          <div className="loader">
            <div className="loader-circle"></div>
            <div className="loader-text">Chargement...</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Loader;
