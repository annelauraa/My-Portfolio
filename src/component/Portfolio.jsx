import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFacebook,
  FaWhatsappSquare,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import TypingEffect from "./TypingEffect";
import Profil from "../assets/img/il_fullxfull.4888297361_pbr0.webp";

import translations from "../translations";
import ProjectsSection from "./ProjectsSection";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import FloatingMenu from "./FloatingMenu";

const flags = {
  fr: "https://flagcdn.com/w40/fr.png",
  en: "https://flagcdn.com/w40/gb.png", // Drapeau anglais (UK)
  mg: "https://flagcdn.com/w40/mg.png",
};
const Portfolio = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [language, setLanguage] = useState("en"); // Langue par défaut
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);

      // Détecter quelle section est visible
      const sections = ["home", "about", "projects", "contact"];
      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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
    <div className="bg-light text-dark min-vh-100 mx-3 rounded">
      <motion.header className="py-4 justify-content-between  bg-light shadow-sm header">
        {/* Barre de progression */}
        <motion.div
          className="position-fixed top-0 start-0 bg-laingo"
          style={{ height: "4px", width: `${scrollProgress}%`, zIndex: 1000 }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
        />
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
                <a href="#projects" className="nav-link ">
                  {translations[language].projects}
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link ">
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
      <motion.section id="home" className="text-center py-5 about-section">
        <div>
          <div className="backdrop-about-section"></div>
          <div className=" overlay-content">
            <img
              src={Profil}
              className="rounded-circle profil_image"
              alt="..."
            />
            <TypingEffect
              text1={translations[language].welcome}
              text2={translations[language].name}
            />

            <p className="hidden description">
              {translations[language].description}
            </p>
            <p className="hidden lead title">{translations[language].title}</p>

            <div className="mt-1 button hidden">
              {/* <p className="lead pink opt">{translations[language].opt}</p> */}
              <button className="hire_me_button">
                {translations[language].hire_me}
              </button>
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section id=" section about">
        <AboutMe language={language} />
      </motion.section>
      <ProjectsSection
        translations={translations}
        language={language}
        className="section"
      />

      <motion.section id="contact" className=" py-5 text-center section">
        <h2 className="fs-3 fw-bold">{translations[language].contactMe}</h2>
        <p>{translations[language].collaboration}</p>
        <div className="d-flex justify-content-center gap-3 mt-3">
          <motion.a
            href="#"
            className="fs-3 text-dark"
            whileHover={{ scale: 1.2 }}
          >
            <a href="#" className="text-dark">
              <FaGithub />
            </a>
          </motion.a>
          <motion.a
            href="#"
            className="fs-3 text-dark"
            whileHover={{ scale: 1.2 }}
          >
            <a href="#" className="text-dark">
              <FaLinkedin />
            </a>
          </motion.a>
          <motion.a
            href="#"
            className="fs-3 text-dark"
            whileHover={{ scale: 1.2 }}
          >
            <a href="#" className="text-dark">
              <FaFacebook />
            </a>
          </motion.a>

          <motion.a
            href="#"
            className="fs-3 text-dark"
            whileHover={{ scale: 1.2 }}
          >
            <a href="wa.me/0261332570863" className="text-dark">
              <FaWhatsappSquare />
            </a>
          </motion.a>

          <motion.a
            href="#"
            className="fs-3 text-dark"
            whileHover={{ scale: 1.2 }}
          >
            <a href="mailto:annelauraa2.0@gmail.com" className="text-dark">
              <FaEnvelope />
            </a>
          </motion.a>
          <Footer />
        </div>
        {!isMobile && (
          <FloatingMenu
            language={language}
            activeSection={activeSection}
            onLanguageChange={setLanguage}
          />
        )}
      </motion.section>
    </div>
  );
};

export default Portfolio;
