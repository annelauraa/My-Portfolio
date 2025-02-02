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

const FloatingMenu = ({ language, activeSection }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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
  // Gérer la visibilité du bouton flottant lors du scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY > 100);
      if (currentScrollY > lastScrollY.current) {
        setIsOpen(0);
      }
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

  return (
    <div ref={menuRef} className="position-fixed bottom-3 end-3">
      {/* Bouton flottant */}
      <motion.div
        className="floating-menu"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.3 }}
      >
        <button className="floating-button" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </motion.div>

      {/* Menu déroulant */}
      {isOpen && (
        // <motion.div
        //   className="menu-content shadow-lg p-3 bg-white rounded"
        //   initial={{ opacity: 0, y: 10 }}
        //   animate={{ opacity: 1, y: 0 }}
        //   transition={{ duration: 0.3 }}
        // >
        //   <ul className="menu-links list-unstyled">
        //     <li>
        //       <a href="#home" onClick={() => setIsOpen(false)}>
        //         <FaHome /> {translations[language].home}
        //       </a>
        //     </li>
        //     <li>
        //       <a href="#about" onClick={() => setIsOpen(false)}>
        //         <FaInfoCircle />
        //         {translations[language].about}
        //       </a>
        //     </li>
        //     <li>
        //       <a href="#projects" onClick={() => setIsOpen(false)}>
        //         <FaProjectDiagram />
        //         {translations[language].projects}
        //       </a>
        //     </li>
        //     <li>
        //       <a href="#contact" onClick={() => setIsOpen(false)}>
        //         <FaEnvelope />
        //         {translations[language].contact}
        //       </a>
        //     </li>
        //   </ul>
        // </motion.div>

        <motion.div className="menu-content shadow-lg p-3 bg-white rounded">
          <ul className="menu-links list-unstyled">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={activeSection === item.id ? "active" : ""}
              >
                <a href={`#${item.id}`}>
                  {item.icon} {item.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default FloatingMenu;
