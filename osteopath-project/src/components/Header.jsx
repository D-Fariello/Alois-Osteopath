import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-Image">
        <NavLink to="/" className="main-nav-logo">
          <img
            src="./images/LogoColored.png"
            alt="Logo web"
            className="main-nav-logo-image"
          />
        </NavLink>
      </div>
      <nav>
        <ul className="nav-bar">
          <li>
            <a href="#acceuil">Acceuil</a>
          </li>
          <li>
            <a href="#a-propos">A propos</a>
          </li>
          <li>
            <a href="#tarif">Tarif</a>
          </li>
          <li>
            <a href="#avis">Avis</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#specialites">Specialités</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
