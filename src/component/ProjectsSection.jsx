import { motion } from "framer-motion";
import PropTypes from "prop-types";
import im1 from "../assets/img/Site-Paneau-Solaire.jpg";
import im2 from "../assets/img/Portfolio.png";
import im3 from "../assets/img/Agriculture.avif";
import { FaGithub } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const fadeInVariants = {
  hidden: { opacity: 0, scale: 0.9 }, // Départ avec une opacité nulle et un léger zoom-out
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.5, ease: "easeInOut" }, // Animation fluide
  },
};
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

  return (
    <motion.section
      id="projects"
      className="text-center text-white rounded mb-5"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="backdrop"></div>
      <div>
        <h2 className="fs-1 fw-bold p-5 magic pink">
          {translations[language]?.recentProjects}
        </h2>

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={true}
          speed={1000}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="m-auto col-lg-6 col-sm-12 col-md-9"
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.8 }}
              >
                <div className="card project-card bg-dark text-white border-0 shadow">
                  <h4 className="card-title py-4 fw-bold ">{project.title}</h4>
                  <img
                    src={project.image}
                    className="card-img-top"
                    alt={project.title}
                  />
                  <div className="card-body">
                    <p className="card-text">{project.description}</p>
                    <button className="Github-link w-75 p-2 mt-2">
                      <a
                        href="https://github.com "
                        className="text-decoration-none pink"
                      >
                        {" "}
                        <FaGithub /> {translations[language].lien_github}
                      </a>
                    </button>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
};

ProjectsSection.propTypes = {
  translations: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
};

export default ProjectsSection;
