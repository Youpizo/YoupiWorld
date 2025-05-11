import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./assets/pages/Home";
import AboutPage from "./assets/pages/About";
import InstallationPage from "./assets/pages/Installation";
import ErrorPage from "./assets/pages/Erreur";
import Layout from "./assets/components/Layout/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/installation" element={<InstallationPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>
);
