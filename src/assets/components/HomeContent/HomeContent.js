import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './HomeContent.css';

const HomeContent = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typedInstance = new Typed(typedRef.current, {
      strings: ["", "Lead", "Automation", "Consultant", "OPS"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });

    return () => {
      typedInstance.destroy(); // Nettoyage propre si le composant est démonté
    };
  }, []);

  return (
    <section className="home-content">
      <h1 className="profession">QA <span className="typing" ref={typedRef}></span></h1>
      <p>test</p>
      <ul>
        <li>1. Installer git :  
            <a href="https://git-scm.com/download/win">Version Windows</a>
        </li>
        <li>2. Installer Node.js et npm :   
            <a href="https://nodejs.org/fr">Version Windows </a>
        </li>
        <li>3. Cloner le Repo Github
            <pre><code>git clone https://github.com/Youpizo/YoupiWorld.git</code></pre>
            <pre><code>cd YoupiWorld</code></pre>
        </li>
        <li>Installer les dépendances dans VSCode :
            <pre><code>npm install</code></pre>
        </li>
        <li>Pour commiter les modifications :
            <pre><code>npm install --save-dev gh-pages</code></pre>
            <p>Configurer package.json :</p>
            <pre><code>"homepage": "https://Youpizo.github.io/YoupiWorld",</code></pre>
        </li>
      </ul>
    </section>
  );
};

export default HomeContent;
