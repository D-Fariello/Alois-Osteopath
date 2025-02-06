import React, { useState } from "react";
import ScrollToHash from "../utils/ScrollToHash";
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
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="page-heading">
      <ScrollToHash />
      <div className="logo-Image">
        <a href="/" className="main-nav-logo">
          <img
            src="/images/poleOsteo.png"
            alt="Logo Pole Osteo"
            className="main-nav-logo-image"
          />
        </a>
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
      <div className={`navigation-bar-mobile ${isMenuOpen ? "active" : ""}`}>
        <ul className="list-burger-menu">
          <li>Spécialités</li>
          <li>Ateliers</li>
          <li>Equipe</li>
          <li>Blog</li>
          <li>À propos</li>
          <li>Contact</li>
        </ul>
      </div>
      {/* Navigation Bar */}
      <nav className="navigation-links">
        <ul className="nav-bar">
          <li>
            <NavLink to="/specialities">Spécialités</NavLink>
          </li>
          <li>
            <a href="#ateliers">Ateliers</a>
          </li>
          <li>
            <NavLink to="/equipe">Equipe</NavLink>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>

          <li>
            <NavLink to="/#faq-section">FAQ</NavLink>
          </li>
          <li>
            <NavLink to="/a-propos">À propos</NavLink>
          </li>
          <li>
            <NavLink to="/#contact">Contact</NavLink>
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
    </div>
  );
};

export default Header;
