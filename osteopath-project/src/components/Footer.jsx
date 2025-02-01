import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="title-footer">
        <h4 className="follow-us"> Suivez-nous ! </h4>
      </div>
      <div className="container">
        <div className="social-icons">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="icon-instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="icon-linkedin"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="icon-facebook"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
      <div className="copyright-div">
        {" "}
        <p className="copyright">
          &copy; {new Date().getFullYear()} Tous droits réservés
        </p>
      </div>
    </footer>
  );
};

export default Footer;
