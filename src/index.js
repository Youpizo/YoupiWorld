import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./assets/pages/Home/Home";
import AboutPage from "./assets/pages/About";
import ErrorPage from "./assets/pages/Erreur";
import VantaBackground from "./assets/components/VantaBackground/VantaBackground";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <VantaBackground />
      <Routes>
        <Route path="/" element={<HomePage/>}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

