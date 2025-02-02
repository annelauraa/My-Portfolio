import translations from "../translations";
import { FaCalendar, FaDownLong, FaFlag, FaLocationDot } from "react-icons/fa6";
import im1 from "../assets/img/pngtree-about-me-presentation-landing-header-vector-png-image_11903557.png";
import im2 from "../assets/img/woman-programmer-working-code-project_1282444-269253.avif";
import im3 from "../assets/img/black-woman-with-headphones-working-laptop-computer_1282444-262339.avif";
import cv from "../assets/pdf/CV-2024.pdf";

const AboutMe = ({ language }) => {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container about-me-container">
        <div className="row text-center container">
          <div className="col">
            <h2 className="display-4 my-5 about-me-title p-3">
              {translations[language].AboutMe}
            </h2>
            <p className="lead">
              <FaFlag className="pink" /> Malagasy |{" "}
              <FaCalendar className="pink" /> {translations[language].Naissance}{" "}
              <br />
              <FaLocationDot className="pink" />
              {translations[language].adresse}
            </p>

            <a
              href={cv}
              className="pink text-decoration-none nav-link home"
              target="blank"
            >
              {translations[language].voir_CV} <FaDownLong className="fs-6" />
            </a>
          </div>
        </div>
        <div className=" flex d-flex">
          <p className="lead fs-2 text-start m-auto pink  py-5">
            {translations[language].competences}
          </p>
          <hr className="pink" />
        </div>
        <div className="row mt-4">
          <div className="col-md-4 mt-5 mb-5 dev-web-skill">
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
                <p className="card-text mt-5">
                  {translations[language].web_des_content}
                </p>
                <img src={im1} alt="" className="w-75 h-auto" />
                <p className="pink fw-bold">
                  {translations[language].modern_stylish}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-5 mb-5 cont-write-skill">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">
                  {translations[language].Content_wr}
                </h5>
                <p className="card-text">
                  {translations[language].Content_wr_content}
                </p>
                <img src={im3} alt="" className="w-50 h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
