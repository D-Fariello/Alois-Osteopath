import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = ({
  currentSlide = 0,
  slideTexts = [],
  buttonColor = "white",
  buttonLink,
}) => {
  const displayText = slideTexts[currentSlide] || "Loading..";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="logo-Image">
        <NavLink to="/" className="main-nav-logo">
          <img
            src="/images/poleOsteo.png"
            alt="Logo Pole Osteo"
            className="main-nav-logo-image"
          />
        </NavLink>
      </div>

      {/* Burger Menu */}
      <div
        className={`burger-menu ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/* Navigation Bar */}
      <nav>
        <ul className={`nav-bar ${isMenuOpen ? "active" : ""}`}>
          <li>
            <a href="#specialites">Spécialités</a>
          </li>
          <li>
            <a href="#ateliers">Ateliers</a>
          </li>
          <li>
            <a href="#equipe">Equipe</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#faq-section">FAQ</a>
          </li>
          {/* <li>
            <a href="#a-propos">À propos</a>
          </li> */}
          <li>
            <a href="#contact"> Contact</a>
          </li>
        </ul>
      </nav>
      <div
        className="button-nav"
        style={{
          backgroundColor: buttonColor,
        }}
      >
        <a href={buttonLink} target="_blank" rel="noopener noreferrer">
          {displayText}
        </a>
      </div>
    </header>
  );
};

export default Header;
