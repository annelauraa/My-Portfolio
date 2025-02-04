import { motion } from "framer-motion";
import PropTypes from "prop-types";
import im1 from "../assets/img/Site-Paneau-Solaire.jpg";
import im2 from "../assets/img/Portfolio.png";
import im3 from "../assets/img/Agriculture.avif";
import { FaGithub } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaCircle, FaHandPointUp } from "react-icons/fa";

const ProjectsSection = ({ translations, language }) => {
  const projects = [
    {
      title: translations[language].projet2_titre,
      description: translations[language].projet2_content,
      image: im2,
    },
    {
      title: translations[language].projet1_titre,
      description: translations[language].projet1_content,
      image: im1,
    },

    {
      title: translations[language].projet3_titre,
      description: translations[language].projet3_content,
      image: im3,
    },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [showHand, setShowHand] = useState(true); // Main visible au début

  // Fonction pour détecter la taille de l'écran
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000); // Si la largeur de la fenêtre est <= 1000px, c'est un mobile
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Vérifie la taille de la fenêtre au chargement

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fonction pour cacher la main dès que l'utilisateur touche l'écran
  const handleTouchStart = () => {
    if (showHand) {
      setShowHand(false); // Masque la main dès que l'utilisateur touche l'écran
    }
  };

  return (
    <motion.section
      id="projects"
      className="bg-card text-center text-white rounded shadow-sm"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {!isMobile && (
        <div>
          <div className="row justify-content-center">
            <h2 className="fs-1 fw-bold pink recent-projects">
              <FaCircle className="fs-6" />{" "}
              {translations[language]?.recentProjects}{" "}
              <FaCircle className="fs-6" />
            </h2>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="col-md-6 col-lg-4 mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="card project-card bg-dark text-white border-0 shadow">
                  <h5 className="card-title py-4 fw-bold ">
                    <span className="pink">~</span> {project.title}{" "}
                    <span className="pink">~</span>
                  </h5>
                  <img
                    src={project.image}
                    className="card-img-top"
                    alt={project.title}
                  />
                  <div className="card-body">
                    <p className="card-text">{project.description}</p>
                    <button className="Github-link w-75 p-2 mt-2">
                      <FaGithub /> {translations[language].lien_github}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {isMobile && (
        <div>
          <h2 className="fs-1 fw-bold recents-projects pink">
            <FaCircle className="fs-6" />{" "}
            {translations[language]?.recentProjects}{" "}
            <FaCircle className="fs-6" />
          </h2>

          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            modules={[Navigation]}
            className="mySwiper"
            onTouchStart={handleTouchStart} // Utilise l'événement touchstart pour détecter l'interaction
          >
            {/* Animation de la main */}
            {showHand && (
              <div className="hand-animation pink">
                <div className="hand-icon">
                  <FaHandPointUp />
                </div>
                <p className="hand-text">{translations[language].slide_tuto}</p>
              </div>
            )}

            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="col-md-6 col-lg-4 m-auto "
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="card project-card bg-dark text-white border-0 shadow">
                    <h5 className="card-title py-4 fw-bold ">
                      <span className="pink">~</span> {project.title}{" "}
                      <span className="pink">~</span>
                    </h5>
                    <img
                      src={project.image}
                      className="card-img-top"
                      alt={project.title}
                    />
                    <div className="card-body">
                      <p className="card-text">{project.description}</p>
                      <button className="Github-link w-75 p-2 mt-2">
                        <FaGithub /> {translations[language].lien_github}
                      </button>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
      <p className="text-dark text-start w-100 mx-5 my-5 px-2 py-2 border-left-pink bg-pink">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        deserunt explicabo dolor deleniti totam rem ex aliquam adipisci quo iste
        laboriosam pariatur cum assumenda, nostrum atque inventore mollitia
        numquam at!
      </p>
    </motion.section>
  );
};

// Validation des props avec un ajustement plus flexible
ProjectsSection.propTypes = {
  translations: PropTypes.object.isRequired, // translations doit être un objet
  language: PropTypes.string.isRequired, // language doit être une chaîne de caractères
};

export default ProjectsSection;
