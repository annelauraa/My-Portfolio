const Footer = () => {
  const current_date = new Date();
  return (
    <div className="bg-dark footer pt-2 pb-1">
      <p className="text-light footer-text">
        Copyright {"("} {current_date.getFullYear()} {") "}
        <span className="pink fw-bold"> | Laingo Tsiory</span>
      </p>
    </div>
  );
};

export default Footer;
