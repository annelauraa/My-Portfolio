import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaBars,
  FaEnvelope,
  FaHome,
  FaInfoCircle,
  FaProjectDiagram,
  FaTimes,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import translations from "../translations";

const FloatingMenu = ({ language, activeSection, onLanguageChange }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // État pour vérifier si l'écran est un mobile
  const menuRef = useRef(null); // Référence pour détecter les clics en dehors
  const lastScrollY = useRef(window.scrollY);
  const menuItems = [
    { id: "home", icon: <FaHome />, label: translations[language].home },
    {
      id: "about",
      icon: <FaInfoCircle />,
      label: translations[language].about,
    },
    {
      id: "projects",
      icon: <FaProjectDiagram />,
      label: translations[language].projects,
    },
    {
      id: "contact",
      icon: <FaEnvelope />,
      label: translations[language].contact,
    },
  ];
  const flags = {
    fr: "https://flagcdn.com/w40/fr.png",
    en: "https://flagcdn.com/w40/gb.png",
    mg: "https://flagcdn.com/w40/mg.png",
  };
  // Gérer la visibilité du bouton flottant lors du scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY > 100); // Afficher le bouton après un certain défilement
      if (currentScrollY !== lastScrollY.current) {
        setIsOpen(false); // Fermer le menu si on descend
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fonction pour ouvrir/fermer le menu
  const toggleMenu = (event) => {
    event.stopPropagation(); // Empêche le clic de se propager à `document`
    setIsOpen((prev) => !prev);
  };

  // Fonction pour fermer le menu si on clique en dehors
  const closeMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // Ajouter un écouteur de clic global seulement quand le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", closeMenu);
    } else {
      document.removeEventListener("click", closeMenu);
    }

    return () => document.removeEventListener("click", closeMenu);
  }, [isOpen]);

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
    <div ref={menuRef} className=" bottom-3 end-3">
      {/* Affiche le bouton flottant sur mobile ou après avoir fait défiler la page */}
      {(isVisible || isMobile) && (
        <motion.div
          className="floating-menu"
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: isVisible || isMobile ? 1 : 0,
            y: isVisible || isMobile ? 0 : 50,
          }}
          transition={{ duration: 0.3 }}
        >
          <button className="floating-button" onClick={toggleMenu}>
            {isOpen ? <FaTimes size={16} /> : <FaBars size={20} />}
          </button>
        </motion.div>
      )}

      {/* Menu déroulant */}
      {isOpen && (
        <motion.div className="menu-content shadow-lg p-3 bg-white rounded">
          <ul className="menu-links list-unstyled">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={activeSection === item.id ? "active" : ""}
              >
                <a href={`#${item.id}`} onClick={() => setIsOpen(false)}>
                  {item.icon} {item.label}
                </a>
              </li>
            ))}
          </ul>
          {isMobile && (
            <div className="mb-show">
              <hr />
              <div className="select-lang-container align-items-center">
                <img src={flags[language]} alt={language} className="flag" />
                <select
                  value={language}
                  onChange={(e) => onLanguageChange(e.target.value)}
                  className="form-select w-auto"
                >
                  <option value="fr">{translations[language].fr}</option>
                  <option value="en">{translations[language].en}</option>
                  <option value="mg">{translations[language].mg}</option>
                </select>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default FloatingMenu;
