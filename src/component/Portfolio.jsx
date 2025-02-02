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

// import french_flag from "../assets/img/French.png";
import english_flag from "../assets/img/English.png";
import malagasy_flag from "../assets/img/Malagasy.png";

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-light text-dark min-vh-100 py-2 mx-3 rounded">
      {/* Barre de progression */}
      <motion.div
        className="position-fixed top-0 start-0 bg-laingo"
        style={{ height: "4px", width: `${scrollProgress}%`, zIndex: 1000 }}
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
      />

      <motion.header className="py-4 px-5 d-flex justify-content-between  bg-white shadow-sm ">
        <h1 className="fs-3 fw-bold">
          <span className="pink">Laingo</span> Tsiory
        </h1>
        <nav className="text-align-center">
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
        {/* Sélecteur de langue */}
        <div className="d-flex align-items-center">
          <img src={flags[language]} alt={language} className="flag" />
          <select
            className="form-select w-auto "
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            name="Language"
          >
            <option value="fr">FR</option>
            <option value="en">
              <img src={english_flag} alt="En" className="lang_flag" />
              EN
            </option>
            <option value="mg">
              <img src={malagasy_flag} alt="Mg" className="lang_flag" />
              MG
            </option>
          </select>
        </div>
      </motion.header>

      <motion.section id="home" className="text-center py-5 about-section">
        <div className="pt-3 overlay-content">
          <img src={Profil} className="rounded-circle profil_image" alt="..." />
          <TypingEffect
            text1={translations[language].welcome}
            text2={translations[language].name}
          />

          <p className="hidden fs-5">{translations[language].description}</p>
          <p className="hidden lead mt-1 fs-1">
            {translations[language].title}
          </p>

          <div className="mt-5  hidden">
            <p className="lead pink">{translations[language].opt}</p>
            <button className="hire_me_button">
              {translations[language].hire_me}
            </button>
          </div>
        </div>
      </motion.section>
      <motion.section id="about">
        <AboutMe language={language} />
      </motion.section>
      <ProjectsSection translations={translations} language={language} />

      <motion.section id="contact" className=" py-5 text-center">
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
      </motion.section>
      <FloatingMenu />
    </div>
  );
};

export default Portfolio;
