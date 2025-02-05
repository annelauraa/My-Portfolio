import { motion } from "framer-motion";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/TechStack.css";
import expressLogo from "../assets/img/1_Jr3NFSKTfQWRUyjblBSKeg.webp";
import githubLogo from "../assets/img/pngwing.com.png";
import mysqlLogo from "../assets/img/png-transparent-mysql-logo-mysql-database-web-development-computer-software-dolphin-marine-mammal-animals-text-thumbnail.png";
import translations from "../translations";
const technologies = [
  {
    name: "Laravel",
    logo: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg",
  },
  {
    name: "Symfony",
    logo: "https://cdn.worldvectorlogo.com/logos/symfony.svg",
  },
  {
    name: "Express.js",
    logo: expressLogo,
  },
  {
    name: "Vue.js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
  },
  { name: "React", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
  },
  {
    name: "Bootstrap",
    logo: "https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg",
  },
  {
    name: "Github",
    logo: githubLogo,
  },
  {
    name: "Photoshop",
    logo: "https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg",
  },
  {
    name: "GIMP",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/The_GIMP_icon_-_gnome.svg",
  },
  {
    name: "Figma",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  },
  {
    name: "MySQL",
    logo: mysqlLogo,
  },
  {
    name: "PostgreSQL",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
  },
];

// const languages = [
//   {
//     name: "PHP",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
//   },
//   {
//     name: "JavaScript",
//     logo: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
//   },
//   { name: "C#", logo: "https://cdn.worldvectorlogo.com/logos/c--4.svg" },
//   { name: "C++", logo: "https://cdn.worldvectorlogo.com/logos/c.svg" },
//   { name: "Java", logo: "https://cdn.worldvectorlogo.com/logos/java-4.svg" },
// ];

export default function TechStack({ language }) {
  return (
    <div className="container text-center mt-5">
      <p className="lead fs-2 w-100 pink skills-title">
        - {translations[language].tech_i_use} -
      </p>
      <div className="row col-sm-9 col-md-6 col-lg-6 m-auto  m-auto justify-content-center techStack">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="col-md-2 col-sm-1 col-3 mb-4"
            whileHover={{ scale: 1.2 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            style={{ width: "5rem", height: "auto" }}
          >
            <img
              src={tech.logo}
              alt={tech.name}
              className="img-fluid"
              style={{ width: "3.2rem", height: "auto", cursor: "pointer" }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
// Validation des props avec un ajustement plus flexible
TechStack.propTypes = {
  language: PropTypes.string.isRequired, // language doit être une chaîne de caractères
};
