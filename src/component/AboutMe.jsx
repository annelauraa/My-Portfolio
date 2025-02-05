import translations from "../translations";
import PropTypes from "prop-types";
import { FaCalendar, FaFile, FaFlag, FaLocationDot } from "react-icons/fa6";
import im1 from "../assets/img/pngtree-about-me-presentation-landing-header-vector-png-image_11903557.png";
import im2 from "../assets/img/hand-drawn-flat-design-api-illustration_23-2149365021.avif";
import im3 from "../assets/img/ui-ux-programmer-flat-design-illustration-vector.jpg";
import cv from "../assets/pdf/CV-2024.pdf";
import TechStack from "./TechStack";

const AboutMe = ({ language }) => {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container about-me-container">
        <div className="text-center container">
          <div className="">
            <h2 className="display-4 about-me-title p-3">
              {translations[language].AboutMe}
            </h2>
            <p className="lead details-of-me">
              <FaFlag className="pink" /> Malagasy |{" "}
              <FaCalendar className="pink" /> {translations[language].Naissance}{" "}
              <br />
              <FaLocationDot className="pink" />
              {translations[language].adresse}
            </p>

            <div className="d-flex align-items-center justify-content-center">
              <a
                href={cv}
                className="pink text-decoration-none nav-link home"
                target="_blank"
              >
                {translations[language].voir_CV}
              </a>
              <FaFile className="fs-6 pink" />
            </div>
          </div>
        </div>
        <div className=" flex d-flex">
          <p className="lead fs-2 w-100 pink skills-title">
            - {translations[language].competences} -
          </p>
          <hr className="pink" />
        </div>
        <div className="row skills-content`">
          <div className="col-md-4  dev-web-skill">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{translations[language].web_dev}</h5>
                <p className="card-text">
                  {translations[language].web_dev_content}
                </p>
                <img src={im2} alt="" className="w-50 h-auto" />
              </div>
            </div>
          </div>
          <div className="col-md-4 align-items-center justify-content-center des-web-skill">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{translations[language].web_des}</h5>
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
          <div className="col-md-4  cont-write-skill">
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
        </div>
      </div>

      <TechStack language={language} />
    </section>
  );
};
AboutMe.propTypes = {
  language: PropTypes.string.isRequired, // language doit être une chaîne de caractères
};

export default AboutMe;
