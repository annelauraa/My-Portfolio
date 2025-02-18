import { useRef, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import translations from "../translations";
import PropTypes from "prop-types";
import emailjs from "@emailjs/browser";
import cover1 from "../assets/img/create-any-website-with-powerful-website-builder-website-builder.jpg";
import cover2 from "../assets/img/web-team.png";
import cover3 from "../assets/img/web-designers-bangalore.jpg";
import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0, scale: 0.9 }, // Départ avec une opacité nulle et un léger zoom-out
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.5, ease: "easeInOut" }, // Animation fluide
  },
};

const notify = (type, message) => {
  if (type === "error") {
    toast.error(message, {
      position: "top-center",
    });
  }
  if (type === "success") {
    toast.success(message, {
      position: "top-center",
    });
  }
};
const cover = [cover1, cover2, cover3];
const CollaborationSwiper = ({ language }) => {
  const swiperRef = useRef(null);
  const form = useRef();
  const [isMobile, setIsMobile] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [justVisiting, setJustVisiting] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    message: "",
    name: "",
  });
  const [messageSent, setMessageSent] = useState(false);

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handleYesClick = () => {
    setShowForm(true);
  };

  const handleNoJustVisit = () => {
    setJustVisiting(true);
    const collaborate_button = document.querySelector(".hire_me_button");
    collaborate_button.classList.add("d-none");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const SERVICE_ID = "service_ujykrsl";
    const TEMPLATE_ID = "template_3ihytgi";
    const PUBLIC_KEY = "kDJJ6EhiGu3a5NCBS";
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          notify("success", translations[language].success_notification);
          setMessageSent(true);
          const collaborate_button = document.querySelector(".hire_me_button");
          collaborate_button.classList.add("d-none");
        },
        (error) => {
          console.error("FAILED...", error.text);
          notify("error", translations[language].error_notification);
        }
      );
  };

  // Fonction pour détecter la taille de l'écran
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767); // Si la largeur de la fenêtre est <= 575px, c'est un mobile
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Vérifie la taille de la fenêtre au chargement

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (messageSent) {
    return (
      <motion.div
        className="container p-5 text-center"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <h1>{translations[language].message_sent1}</h1>
        <h5>{translations[language].message_sent2}</h5>
      </motion.div>
    );
  }

  if (showForm) {
    return (
      <motion.div
        className="container p-5 text-start"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <form ref={form} onSubmit={handleSubmit} className="contact-form">
          <h4>{translations[language].contact_title}</h4>
          <div className="mt-5 mb-3">
            <label className="form-label">
              {translations[language].sender_name}
            </label>
            <input
              type="text"
              name="user_name"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">{translations[language].email}</label>
            <input
              type="email"
              name="user_email"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              {translations[language].message}
            </label>
            <textarea
              name="message"
              className="form-control"
              rows="4"
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className=" d-flex gap-2">
            <button type="submit" className="btn hire_me_button">
              {translations[language].send}
            </button>
            <div className="btn btn-secondary" onClick={() => setShowForm(0)}>
              {translations[language].cancel}
            </div>
          </div>
        </form>
        {/* <ToastContainer /> */}
      </motion.div>
    );
  }

  if (justVisiting) {
    return (
      <motion.div
        className="container p-5 text-center"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <h1>{translations[language].enjoy_visit}</h1>
        <p className="pink billdreams">
          ~ {translations[language].thank_you_visit} ~
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
    >
      {language === "en" && (
        <p className="fs-2 text-start  p-4 m-5 w-75 m-auto pink">
          Now, tell me <span className="fw-bold">what YOU need</span> too!
        </p>
      )}
      {language === "fr" && (
        <p className="fs-2 text-start  p-4 m-5 w-75 m-auto pink">
          Maintenant, dites-moi{" "}
          <span className="fw-bold">de quoi VOUS avez</span> aussi{" "}
          <span className="fw-bold">besoin</span>!
        </p>
      )}
      {language === "mg" && (
        <p className="fs-2 text-start  p-4 m-5 w-75 m-auto pink">
          Zao ary, teneno ahy <span className="fw-bold">izay ILAINAO</span> koa!
        </p>
      )}
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={false}
        loop={true}
      >
        {[1, 2, 3].map((num) => (
          <SwiperSlide key={num}>
            {!isMobile && (
              <div className="row text-start p-5 m-5 w-75 m-auto shadow">
                <div className="col-5">
                  <h1 className="billdreams fs-1">
                    {translations[language][`what_do_you_need_title${num}`]} ~
                  </h1>
                  <p className="fs-4">
                    {translations[language][`what_do_you_need${num}`]}
                  </p>
                  <div className="row">
                    <div className="group-button col-6">
                      <button
                        className="shadow-sm yes-button"
                        onClick={handleYesClick}
                      >
                        {num !== 3 && <>{translations[language].yes}</>}
                        {num === 3 && <>OK</>}
                      </button>
                      {num !== 3 && (
                        <button
                          className="shadow-sm no-button"
                          onClick={handleNextSlide}
                        >
                          {translations[language].no}
                        </button>
                      )}
                    </div>
                    <div className="mt-2">
                      <a
                        href="#collaboration-context"
                        className="fw-bold text-dark"
                        onClick={handleNoJustVisit}
                      >
                        {translations[language].no_just_visit}
                      </a>{" "}
                      😁
                    </div>
                  </div>
                </div>
                <div className={`col-7 cover${num}`}></div>
              </div>
            )}
            {isMobile && (
              <div className=" text-start p-5 m-5 w-100 m-auto">
                <div className="row mb-5">
                  <img src={cover[num - 1]} alt="" width={100} />
                </div>
                <div className="row">
                  <h1 className="billdreams fs-1">
                    {translations[language][`what_do_you_need_title${num}`]} ~
                  </h1>
                  <p className="fs-4">
                    {translations[language][`what_do_you_need${num}`]}
                  </p>
                  <div className="row">
                    <div className="group-button col-6">
                      <button
                        className="shadow-sm yes-button"
                        onClick={handleYesClick}
                      >
                        {num !== 3 && <>{translations[language].yes}</>}
                        {num === 3 && <>OK</>}
                      </button>
                      {num !== 3 && (
                        <button
                          className="shadow-sm no-button"
                          onClick={handleNextSlide}
                        >
                          {translations[language].no}
                        </button>
                      )}
                    </div>
                    <div className="mt-2">
                      <a
                        href="#collaboration-context"
                        className="fw-bold text-dark"
                        onClick={handleNoJustVisit}
                      >
                        {translations[language].no_just_visit}
                      </a>{" "}
                      😁
                    </div>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

CollaborationSwiper.propTypes = {
  language: PropTypes.string,
};

export default CollaborationSwiper;
