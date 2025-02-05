import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/HandwritingText.css";
import pen from "../assets/img/pen.png";

const HandwritingWithPen = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [penPosition, setPenPosition] = useState({ left: 0, top: 0 });

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);

        // Met à jour la position du stylo
        const charWidth = 20; // Ajuste la distance entre chaque lettre
        setPenPosition({ left: index * charWidth, top: 5 });
      }, 150); // Vitesse d'écriture
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <div className="handwriting-container">
      <span className="handwriting-text">{displayedText}</span>
      <img
        src={pen} // Assure-toi que cette image est bien dans `public/pen.png`
        alt="Stylo"
        className="pen"
        style={{ left: `${penPosition.left}px`, top: `${penPosition.top}px` }}
      />
    </div>
  );
};

HandwritingWithPen.propTypes = {
  text: PropTypes.string.isRequired,
};
export default HandwritingWithPen;
