import { motion } from "framer-motion";
import PropTypes from "prop-types";
import im1 from "../assets/img/Site-Paneau-Solaire.jpg";
import im2 from "../assets/img/Portfolio.png";
import im3 from "../assets/img/Agriculture.avif";
import {
  FaChevronLeft,
  FaChevronRight,
  FaCircle,
  FaGithub,
  FaHandPointer,
} from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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
  const [showHand, setShowHand] = useState(true);
  const [showSwipeHint, setShowSwipeHint] = useState(false);
  const [showButtons, setShowButtons] = useState(true); // Nouvelle variable d'état pour les boutons

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTouchStart = () => {
    if (showHand) {
      setShowHand(false);
    }
  };

  const handleButtonClick = () => {
    if (!showHand) {
      setShowSwipeHint(true);
      setShowButtons(false); // Masquer les boutons quand le tutoriel s'affiche
      setTimeout(() => {
        setShowSwipeHint(false);
        setShowButtons(true); // Réafficher les boutons après 3 secondes
      }, 3000);
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
            <h2 className="fs-1 fw-bold pink recent-projects mb-2">
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
            {translations[language]?.recentProjects}
          </h2>

          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            modules={[Navigation]}
            className="mySwiper"
            onTouchStart={handleTouchStart}
          >
            {showHand && (
              <div className="hand-animation pink">
                <div className="hand-icon">
                  <FaHandPointer />
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
                      {project.title}
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

          {showButtons && !showHand && (
            <div>
              <button className=" btn" onClick={handleButtonClick}>
                <FaChevronLeft className="pink fs-6" />
              </button>
              <button className="btn" onClick={handleButtonClick}>
                <FaChevronRight className="pink fs-6" />
              </button>
            </div>
          )}

          {showSwipeHint && (
            <motion.div
              className="swipe-hint fw-bold mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className=" hint pink">
                <div className="hand-icon ">
                  <FaHandPointer />
                </div>
                <p className="hand-text">{translations[language].swipe_hint}</p>
              </div>
            </motion.div>
          )}
        </div>
      )}
    </motion.section>
  );
};

ProjectsSection.propTypes = {
  translations: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
};

export default ProjectsSection;
