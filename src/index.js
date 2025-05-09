import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "../src/assets/pages/Erreur";
import HomePage from "./assets/pages/Home";
import Layout from "./assets/components/Layout/Layout";
import AboutPage from "./assets/pages/About";
import InstallationPage from "./assets/pages/Installation";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router basename="/YoupiWorld">
    <Layout>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/installation" element={<InstallationPage />} />
          </Routes>
        </main>
    </Layout>
    </Router>
  </React.StrictMode>
);