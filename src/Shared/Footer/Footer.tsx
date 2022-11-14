import React from "react";
import "./Footer.css";
interface PropTypes {}

const Footer: React.FC<PropTypes> = () => {
  return (
    <div className="footer">
      <p className="footer-title">Designed By PSDFreebies.com</p>
      <p className="footer-title">COPYRIGHT 2017</p>
    </div>
  );
};

export default Footer;
