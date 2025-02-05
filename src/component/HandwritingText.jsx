import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

const HandwritingWithPen = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFinished, setIsFinished] = useState(false); // Ajouter un état pour vérifier si l'animation est terminée

  useEffect(() => {
    if (!isDeleting && index < text.length) {
      // Ajouter le texte
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 180); // Vitesse d'écriture
      return () => clearTimeout(timeout);
    } else if (isDeleting && index > 0) {
      // Effacer le texte
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, prev.length - 1));
        setIndex(index - 1);
      }, 100); // Vitesse d'effacement
      return () => clearTimeout(timeout);
    } else if (index === text.length && !isDeleting) {
      // Attendre quelques secondes avant de commencer l'effacement
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1500); // Attente avant de commencer l'effacement (1.5 seconde)
      return () => clearTimeout(timeout);
    } else if (index === 0 && isDeleting) {
      // Arrêter le processus après l'effacement complet
      setIsFinished(true); // L'animation est terminée
    }
  }, [index, text, isDeleting]);

  return (
    <div className="handwriting-container">
      <p className="handwriting-text fs-1 text-animated text-align-center">
        {displayedText}
      </p>
      {isFinished && (
        <p className="fs-3 text-muted"></p> // Message à afficher quand l'animation est finie
      )}
    </div>
  );
};

HandwritingWithPen.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HandwritingWithPen;
