import { motion } from "framer-motion";
import PropTypes from "prop-types"; // Import de PropTypes
import im1 from "../assets/img/Site-Paneau-Solaire.jpg";
import im2 from "../assets/img/Portfolio.png";
import im3 from "../assets/img/Agriculture.avif";
import { FaGithub } from "react-icons/fa6";

const ProjectsSection = ({ translations, language }) => {
  const projects = [
    {
      title: translations[language].projet1_titre,
      description: translations[language].projet1_content,
      image: im1,
    },
    {
      title: translations[language].projet2_titre,
      description: translations[language].projet2_content,
      image: im2,
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
      className="my-5 p-5 bg-card text-center text-white rounded shadow-sm"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <h2 className="fs-1 fw-bold mb-5 pink">
            {translations[language]?.recentProjects}
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
              <div className="card project-card bg-dark text-white border-0 shadow py-5 px-5 mx-3">
                <h5 className="card-title py-3">{project.title}</h5>
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
        <p className="text-dark text-start w-100 mx-5 my-5 px-2 py-2 border-left-pink bg-pink">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          deserunt explicabo dolor deleniti totam rem ex aliquam adipisci quo
          iste laboriosam pariatur cum assumenda, nostrum atque inventore
          mollitia numquam at!
        </p>
      </div>
    </motion.section>
  );
};

// Validation des props avec un ajustement plus flexible
ProjectsSection.propTypes = {
  translations: PropTypes.object.isRequired, // translations doit être un objet
  language: PropTypes.string.isRequired, // language doit être une chaîne de caractères
};

export default ProjectsSection;
