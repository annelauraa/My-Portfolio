import PropTypes from "prop-types";
import translations from "../translations";
import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0.5, scale: 0.9 }, // Départ avec une opacité nulle et un léger zoom-out
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.5, ease: "easeInOut" }, // Animation fluide
  },
};
const FAQ = ({ language }) => {
  let faq = () => {
    let faqs = [];
    for (let index = 1; index < 8; index++) {
      let question = translations[language][`question${index}`];
      let answer = translations[language][`answer${index}`];
      let f = { question, answer };
      faqs.push(f);
    }
    return faqs;
  };
  const faqs = faq();
  return (
    <motion.div
      className="container faq py-5 text-start"
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.8 }}
    >
      <h2 className="faq-title text-secondary">FAQ</h2>
      <hr className="text-secondary mb-4" />
      <div className="accordion" id="accordionExample">
        {faqs.map((faq, index) => (
          <div className="accordion-item" key={index}>
            <h2 className=" accordion-header" id={`heading${index}`}>
              <button
                className={`accordion-button  ${
                  index !== 5 ? "faq-question" : ""
                } ${index === 5 ? "faq-question-highlight" : ""}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded={index === 0 ? "true" : "false"}
                aria-controls={`collapse${index}`}
              >
                <span className="fw-bold ">{faq.question}</span>
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className={`accordion-collapse collapse ${
                index === 0 ? "show" : ""
              }`}
              aria-labelledby={`heading${index}`}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <h6 className="fs-bold">{faq.answer}</h6>
                {index === 4 && (
                  <div>
                    <p>{translations[language].step1}</p>
                    <p>{translations[language].step2}</p>
                    <p>{translations[language].step3}</p>
                    <p>{translations[language].step4}</p>
                    <p>{translations[language].step5}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

FAQ.propTypes = {
  language: PropTypes.string,
};
export default FAQ;
