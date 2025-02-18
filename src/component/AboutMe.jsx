import translations from "../translations";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { FaCalendar, FaFile, FaFlag, FaLocationDot } from "react-icons/fa6";
import im1 from "../assets/img/pngtree-about-me-presentation-landing-header-vector-png-image_11903557.png";
import im2 from "../assets/img/hand-drawn-flat-design-api-illustration_23-2149365021.avif";
import im3 from "../assets/img/ui-ux-programmer-flat-design-illustration-vector.jpg";
import cv from "../assets/pdf/CV-2024.pdf";
import TechStack from "./TechStack";

const fadeInVariants = {
  hidden: { opacity: 0.5, scale: 0.9 }, // Départ avec une opacité nulle et un léger zoom-out
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: "easeInOut" }, // Animation fluide
  },
};

const AboutMe = ({ language }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.section id="about" className=" bg-light">
        <div className="container about-me-container">
          <div className="text-center container">
            <div className="">
              <motion.h2
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                className="display-4 about-me-title p-3"
              >
                {translations[language].AboutMe}
              </motion.h2>
              <motion.h3
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                className="fs-1 mt-5 pt-5 pink"
              >
                {translations[language].who_am_i}
              </motion.h3>
              <motion.p
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                className="lead "
              >
                <span className="fs-2">Laingotsiory Oliva Anne Laura</span>{" "}
                <br />
                <FaFlag className="pink" /> Malagasy |{" "}
                <FaCalendar className="pink" />{" "}
                {translations[language].Naissance} <br />
                <FaLocationDot className="pink" />
                {translations[language].adresse}
              </motion.p>

              <motion.div
                className="d-flex align-items-center justify-content-center"
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
              >
                <a
                  href={cv}
                  className="pink text-decoration-none nav-link home"
                  target="_blank"
                >
                  {translations[language].voir_CV}
                </a>
                <FaFile className="fs-6 pink" />
              </motion.div>
            </div>
          </div>
          <motion.div
            className=" flex d-flex"
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="lead fs-2 w-100 pink skills-title">
              - {translations[language].competences} -
            </p>
            <hr className="pink" />
          </motion.div>
          <div className="row skills-content`">
            <motion.div
              className="col-md-4"
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >
              <div className=" dev-web-skill">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">
                      {translations[language].web_dev}
                    </h5>
                    <p className="card-text">
                      {translations[language].web_dev_content}
                    </p>
                    <img src={im2} alt="" className="w-50 h-auto" />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="col-md-4 align-items-center justify-content-center"
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >
              <div className=" des-web-skill">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">
                      {translations[language].web_des}
                    </h5>
                    <p className="card-text">
                      {translations[language].web_des_content}
                    </p>
                    <img src={im3} alt="" className="w-75 h-auto" />
                    <p className="pink fw-bold mt-2">
                      {translations[language].modern_stylish}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="col-md-4"
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >
              <div className="cont-write-skill">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">
                      {translations[language].Content_wr}
                    </h5>
                    <p className="card-text">
                      {translations[language].Content_wr_content}
                    </p>
                    <img src={im1} alt="" className="w-50 h-auto" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          <TechStack language={language} />
        </motion.div>
      </motion.section>
    </motion.div>
  );
};
AboutMe.propTypes = {
  language: PropTypes.string.isRequired, // language doit être une chaîne de caractères
};

export default AboutMe;
