import React from 'react';
import './InstallContent.css';

const InstallContent = () => {
  return (
    <section className="home-content">
      <h1>Démarrer la partie</h1>
      <p>Steps :</p>
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
            <p>Configurer package.json : Ajoute la ligne suivante dans ton fichier package.json :</p>
            <pre><code>"homepage": "https://Youpizo.github.io/YoupiWorld",</code></pre>
        </li>
      </ul>
    </section>
  );
};

export default InstallContent;