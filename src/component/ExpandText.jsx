import { useState } from "react";
import PropTypes from "prop-types";
import translations from "../translations";

const ExpandText = ({ text, language }) => {
  const [expanded, setExpanded] = useState(false);

  // Trouver la première phrase et l'afficher par défaut
  const firstSentence = text.includes(".") ? text.split(".")[0] + "." : text;

  return (
    <p>
      {expanded ? text : firstSentence + " "}
      <a href="#extend" onClick={() => setExpanded(!expanded)} className="pink">
        {expanded
          ? translations[language].read_less
          : translations[language].read_more}
      </a>
    </p>
  );
};

ExpandText.propTypes = {
  text: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};

export default ExpandText;
