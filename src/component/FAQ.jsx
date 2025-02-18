import PropTypes from "prop-types";
import translations from "../translations";

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
    <div className="container faq text-start">
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
                <h6>{faq.answer}</h6>
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
    </div>
  );
};

FAQ.propTypes = {
  language: PropTypes.string,
};
export default FAQ;
