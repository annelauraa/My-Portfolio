import { FaCopyright } from "react-icons/fa6";

const Footer = () => {
  const current_date = new Date();
  return (
    <div className="bg-dark footer pt-2 pb-1">
      <p className="text-light footer-text">
        <FaCopyright className="pink fw-bold" /> Copyright {"("}{" "}
        {current_date.getFullYear()} {") "}
        <span className="pink fw-bold">Laingo Tsiory</span>
      </p>
    </div>
  );
};

export default Footer;
