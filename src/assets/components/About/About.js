import React from "react"
import Collapse from "../Collapse/Collapse"
import "../About/About.css";


const About = () => {
  return (
    <div className="about-page">
      <Collapse title="Fiabite" content="Teub" />
      <Collapse title="Respebite" content="Zgeg" />
      <Collapse title="Servbite"content="Zizou" />
      <Collapse title="Sécuribite" content="Zinedine Barreau" />
    </div>
  );
};

export default About;