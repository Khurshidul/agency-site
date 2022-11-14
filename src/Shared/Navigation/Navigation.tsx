import React from "react";
import "./Navigation.css";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSkype } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
interface PropTypes {}

const Navigation: React.FC<PropTypes> = () => {
  return (
    <nav>
      <div className="navigation-bar">
        <input type="checkbox" id="click" />
        <label htmlFor="click" className="menu-btn">
          <i className="fa fa-bars"></i>
        </label>
        <div className="bookpod">
          <img src={logo} alt="" />
        </div>
        <div>
          <FontAwesomeIcon
            className="mediaIcon"
            icon={faFacebook}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="mediaIcon"
            icon={faTwitter}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="mediaIcon"
            icon={faSkype}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="mediaIcon"
            icon={faLinkedin}
          ></FontAwesomeIcon>
        </div>
        <div className="menu-items">
          <ul>
            <li>
              <a className="active" href="#home">
                HOME
              </a>
            </li>
            <li>
              <a href="#categories">ABOUT US</a>
            </li>
            <li>
              <a href="podcasts">Blog</a>
            </li>
            <li>
              <a href="podcasts">SERVICES</a>
            </li>
            <li>
              <a href="podcasts">PAGES</a>
            </li>
            <li>
              <a href="podcasts">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
