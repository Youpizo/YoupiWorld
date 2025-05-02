import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "../src/assets/pages/Erreur";
import HomePage from "./assets/pages/Home";
import Header from "./assets/components/Header/Header";
import Footer from "./assets/components/Footer/Footer";
import Layout from "./assets/components/Layout/Layout";
import AboutPage from "./assets/pages/About";
import HeaderBanner1 from "./assets/components/Banner/Banner";

import InstallationPage from "./assets/pages/Installation";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router basename="/YoupiWorld">
        <Header />
        <HeaderBanner1 />
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
      <Footer />
    </Router>
  </React.StrictMode>
);