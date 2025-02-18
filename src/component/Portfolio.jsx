import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import translations from "../translations";

//composants
import TypingEffect from "./TypingEffect";
import CollaborationSwiper from "./CollaborationSwiper";
import AboutMe from "./AboutMe";
import ProjectsSection from "./ProjectsSection";
import FloatingMenu from "./FloatingMenu";
import Footer from "./Footer";
import FAQ from "./FAQ";
import { ToastContainer } from "react-toastify";

//image
import Profil from "../assets/img/il_fullxfull.4888297361_pbr0.webp";
import Profil_text_bulle from "../assets/img/il_fullxfull.4888297361_pbr0.png";
import im1 from "../assets/img/im1.jpg";
import im2 from "../assets/img/im2.jpg";
import im3 from "../assets/img/im3.jpg";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Importation des icons
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFacebook,
  FaWhatsappSquare,
} from "react-icons/fa";
import ExpandText from "./ExpandText";

const fadeInVariants = {
  hidden: { opacity: 0, scale: 0.9 }, // Départ avec une opacité nulle et un léger zoom-out
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: "easeInOut" }, // Animation fluide
  },
};

const flags = {
  fr: "https://flagcdn.com/w40/fr.png",
  en: "https://flagcdn.com/w40/gb.png",
  mg: "https://flagcdn.com/w40/mg.png",
};

const Portfolio = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [language, setLanguage] = useState("en"); // Langue par défaut
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showTextBulle, setShowTextBulle] = useState(false);
  const slides = [
    {
      title: translations[language].presentation_title1,
      text: translations[language].presentation_content1,
      img: im2,
    },
    {
      title: translations[language].presentation_title2,
      text: translations[language].presentation_content2,
      img: im3,
    },
    {
      title: translations[language].presentation_title3,
      text: translations[language].presentation_content3,
      img: im1,
    },
  ];

  //Fonction pour gérer le scroll bar
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

  //Affiche du bulle de conversation
  const showCollaborationContext = () => {
    if (!showTextBulle) {
      setShowTextBulle(true);
    }
    setTimeout(() => {
      setShowTextBulle(false);
    }, 10000);
  };
  return (
    <div className="bg-light text-dark min-vh-100 mx-3 rounded">
      {/* Navbar */}
      <motion.header className="py-4 justify-content-between  bg-light shadow-sm header">
        {/* Barre de progression */}
        <motion.div
          className="position-fixed top-0 start-0 bg-laingo"
          style={{ height: "4px", width: `${scrollProgress}%`, zIndex: 1000 }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
        />
        {/* End Barre de progression */}

        {/* Logo */}
        <motion.h1 className="fs-3 fw-bold logo">
          <span className="pink">Laingo</span> Tsiory
        </motion.h1>
        {/* End Logo */}

        {/* Les liens de navigations : cas des ecrans Desktop */}
        {!isMobile && (
          <nav className="text-align-center mb-d-none">
            <ul className="nav">
              <li className="nav-item">
                <a href="#" className="nav-link home ">
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
        {/* End des liens de navigations : cas des ecrans Desktop */}

        {/* Sélecteur de langue : cas des ecrans Desktop */}
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
        {/* End Sélecteur de langue : cas des ecrans Desktop */}

        {/* Le menu flottant : cas des ecrans mobiles */}
        {isMobile && (
          <FloatingMenu
            language={language}
            activeSection={activeSection}
            onLanguageChange={setLanguage}
          />
        )}
        {/* End du menu flottant : cas des ecrans mobiles */}
      </motion.header>
      {/* End Navbar */}
      {/* Home */}
      <motion.section id="home" className="text-center  about-section">
        <div className=" overlay-content">
          {/* Profil picture */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            <img
              src={Profil}
              className="rounded-circle profil_image"
              alt="..."
            />
          </motion.div>
          {/* End Profil picture */}

          {/* Texte de bienvenue */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            <TypingEffect
              text1={translations[language].welcome}
              text2={translations[language].name}
            />
          </motion.div>
          {/* End Texte de bienvenue */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            <motion.p
              className="hidden lead title"
              viewport={{ once: false, amount: 0.5 }}
            >
              {translations[language].title}
            </motion.p>
            <motion.div
              className="mt-4 button hidden"
              viewport={{ once: false, amount: 0.5 }}
            >
              <a
                href="#collaboration-context"
                onClick={showCollaborationContext}
                className="text-decoration-none text-light hire_me_button mt-3"
              >
                {translations[language].hire_me}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      {/* 
      <div className="pink-bar m-auto text-light fw-bold "></div> */}
      {/* End Home */}
      {/* Presentation des services */}
      {!isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="container py-5 my-5"
        >
          {slides.map((slide, index) => (
            <>
              <motion.div
                key={index}
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                className="text-center p-4 bg-light flex d-flex justify-content-center align-content-center h-auto w-75 m-auto my-5"
              >
                <div className="row text-start">
                  {index === 1 && (
                    <div className="col-5 align-items-center justify-content-center px-2">
                      <img
                        src={slide.img}
                        alt="Illustration"
                        className="img-fluid rounded m-3" // Bootstrap responsive image
                        style={{ maxHeight: "300px", objectFit: "cover" }}
                      />
                    </div>
                  )}
                  <div className="col-7 align-items-center justify-content-center p-5 ">
                    <h1 className="fs-1  mb-4 fw-bold  justify-items-center">
                      {slide.title}
                    </h1>
                    <ExpandText text={slide.text} language={language} />
                    {/* <button className="hire_me_button w-50 p-2">
                      {language === "fr" && "Contactez-moi maintenant"}
                      {language === "en" && "Contact me now"}
                      {language === "mg" && "Mifandraisa amiko"}
                    </button> */}
                  </div>

                  {index !== 1 && (
                    <div className="col-5 align-items-center justify-content-center">
                      <img
                        src={slide.img}
                        alt="Illustration"
                        className="img-fluid rounded m-3" // Bootstrap responsive image
                        style={{ maxHeight: "300px", objectFit: "cover" }}
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            </>
          ))}
        </motion.div>
      )}
      {isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="container py-5 my-5"
        >
          {slides.map((slide, index) => (
            <>
              <motion.div
                key={index}
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                className="text-center p-5 bg-light flex d-flex justify-content-center align-content-center h-auto w-100 m-auto my-5"
              >
                <div className={index === 1 ? `text-center` : `text-start`}>
                  <div className=" align-items-center justify-content-center ">
                    <h1 className="fs-1 mb-4 fw-bold  justify-items-center">
                      {slide.title}
                    </h1>
                    <ExpandText text={slide.text} language={language} />
                    {/* <button className="hire_me_button w-50 p-2">
                      {language === "fr" && "Contactez-moi maintenant"}
                      {language === "en" && "Contact me now"}
                      {language === "mg" && "Mifandraisa amiko"}
                    </button> */}
                    <div className=" align-items-center justify-content-center">
                      <img
                        src={slide.img}
                        alt="Illustration"
                        className="img-fluid rounded m-3" // Bootstrap responsive image
                        style={{ maxHeight: "300px", objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          ))}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          ></motion.div>
        </motion.div>
      )}
      {/* End Presentation des services */}
      {/* About */}
      <motion.section id=" about">
        <AboutMe language={language} />
      </motion.section>
      {/* End About */}
      {/* Projects */}
      <ProjectsSection translations={translations} language={language} />
      {/* End Projects */}
      {/* Collaboration context */}
      <motion.section id="collaboration-context" className="mt-5 pt-5">
        <motion.div>
          {showTextBulle && (
            <div className="flex d-flex text-start align-items-center justify-items-center text-bulle">
              <img
                src={Profil_text_bulle}
                alt=""
                width={50}
                height={50}
                className="m-2 rounded-circle shadow-sm"
              />
              <div>
                <TypingEffect
                  text1={translations[language].text_in_textBulle}
                  text2=" "
                  title={false}
                />
              </div>
            </div>
          )}

          <CollaborationSwiper language={language} />
        </motion.div>
      </motion.section>
      {/*End Collaboration context */}
      {/* FAQ */}
      <FAQ language={language} />
      {/*End FAQ */}
      {/* Contact */}
      <motion.section id="contact" className=" px-5 text-center ">
        <h2 className="fs-3 fw-bold">{translations[language].contactMe}</h2>
        <p>{translations[language].collaboration}</p>
        <div className="d-flex justify-content-center gap-3 mt-3">
          <motion.a
            href="https://github.com/annelauraa"
            target="_blank"
            className="fs-3 text-dark"
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/laingotsiory-anne-laura-0520a1276"
            target="_blank"
            className="fs-3 text-dark"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://web.facebook.com/tsiory.laura"
            target="_blank"
            className="fs-3 text-dark"
            whileHover={{ scale: 1.2 }}
          >
            <FaFacebook />
          </motion.a>
          <motion.a
            href="https://wa.me/+261332570863"
            target="_blank"
            className="fs-3 text-dark"
            whileHover={{ scale: 1.2 }}
          >
            <FaWhatsappSquare />
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
        </div>
      </motion.section>
      {/* End Contact */}
      {/* Footer */}
      <Footer />
      {/* End Footer */}
      {/* Le menu flottant */}
      {!isMobile && (
        <FloatingMenu
          language={language}
          activeSection={activeSection}
          onLanguageChange={setLanguage}
        />
      )}
      <ToastContainer />
    </div>
  );
};

export default Portfolio;
