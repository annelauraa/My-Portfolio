// import React from 'react';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import translations from "../translations";
// importation des css
import "bootstrap/dist/css/bootstrap.min.css";

const flags = {
  fr: "https://flagcdn.com/w40/fr.png",
  en: "https://flagcdn.com/w40/gb.png",
  mg: "https://flagcdn.com/w40/mg.png",
};

const Navbar = () => {
  // Fonction pour détecter la taille de l'écran
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767); // Si la largeur de la fenêtre est <= 575px, c'est un mobile
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Vérifie la taille de la fenêtre au chargement

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <motion.header className="py-4 justify-content-between  bg-light shadow-sm header">
        <h1 className="fs-3 fw-bold">
          <span className="pink">Laingo</span> Tsiory
        </h1>
        {!isMobile && (
          <nav className="text-align-center mb-d-none">
            <ul className="nav">
              <li className="nav-item">
                <a href="#home" className="nav-link home ">
                  {translations[language].home}
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link ">
                  {translations[language].about}
                </a>
              </li>
              <li className="nav-item">
                <a href="/projects" className="nav-link ">
                  {translations[language].projects}
                </a>
              </li>
              <li className="nav-item">
                <a href="#/Contact" className="nav-link ">
                  {translations[language].contact}
                </a>
              </li>
            </ul>
          </nav>
        )}
        {/* Sélecteur de langue */}
        {!isMobile && (
          <div className="select-lang-container mb-d-none align-items-center">
            <img src={flags[language]} alt={language} className="flag" />
            <select
              className="form-select w-auto "
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              name="Language"
            >
              <option value="fr">{translations[language].fr}</option>
              <option value="en">{translations[language].en}</option>
              <option value="mg">{translations[language].mg}</option>
            </select>
          </div>
        )}

        {isMobile && (
          <FloatingMenu
            language={language}
            activeSection={activeSection}
            onLanguageChange={setLanguage}
          />
        )}
      </motion.header>
    </div>
  );
};

export default Navbar;
