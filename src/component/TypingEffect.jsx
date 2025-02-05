import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

const TypingEffect = ({ text1, text2, highlightWord }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;
    let displayedText = "";
    let interval;

    const startTyping = () => {
      interval = setInterval(() => {
        if (index < text1.length) {
          displayedText = text1.slice(0, index);
          setText(displayedText);
        } else if (index < text1.length + text2.length) {
          const currentText2 = text2.slice(0, index - text1.length);
          let formattedText = text1 + "<br />" + currentText2;

          // Ajout du style au mot "Laingo" ou tout autre mot à mettre en valeur
          if (highlightWord && currentText2.includes(highlightWord)) {
            formattedText = formattedText.replace(
              highlightWord,
              `<span class='highlight'>${highlightWord}</span>`
            );
          }

          setText(formattedText);
        } else {
          clearInterval(interval);
        }
        index++;
      }, 110);
    };

    startTyping();
    return () => clearInterval(interval);
  }, [text1, text2, highlightWord]);

  return (
    <div className="container mt-5">
      <p
        className="text-center text-plus-grand"
        dangerouslySetInnerHTML={{ __html: text }}
      ></p>
    </div>
  );
};

// PropTypes pour valider les props
TypingEffect.propTypes = {
  text1: PropTypes.string,
  text2: PropTypes.string,
  highlightWord: PropTypes.string,
};

// Valeurs par défaut
TypingEffect.defaultProps = {
  text1: "Bienvenue sur mon Portfolio,",
  text2: " Je suis Laingo!",
  highlightWord: "Laingo", // Mot mis en valeur par défaut
};

export default TypingEffect;
