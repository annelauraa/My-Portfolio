import { FaCopyright } from "react-icons/fa6";

const Footer = () => {
  const current_date = new Date();
  return (
    <div className="bg-dark footer pt-2">
      <p className="text-light footer-text">
        Laingo Tsiory <FaCopyright className="fs-5 pink" />{" "}
        {current_date.getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
