import React from "react";
import Header from "../components/Header";

const Specialities = () => {
  return (
    <div>
      <Header />
      <div className="title-section">
        <h1 className="specialities-title">Spécialités</h1>
      </div>
      {/* Specialities 1 Section  */}
      <section className="specialities-info">
        <h2 className="specialities-subtitle"> Moments de vie</h2>
        <div className="specialities-item">
          <img
            src="/icones/hero-icones/PNG/Diplome.png"
            alt="degree"
            className="degree-icon"
          />
          <span className="specialities-text">Futures Mamans </span>
        </div>
        <div className="specialities-item">
          <img
            src="/icones/hero-icones/PNG/Chrono.png"
            alt="Bienveillance"
            className="heart-icon"
          />
          <span className="specialities-text">Nourrissons et Enfants</span>
        </div>
        <div className="specialities-item">
          <img
            src="/icones/hero-icones/PNG/Bienveillance.png"
            alt="timer"
            className="timer-icon"
          />
          <span className="specialities-text">Sportifs</span>
        </div>
        <div className="specialities-item">
          <img
            src="/icones/hero-icones/PNG/TrancheAge.png"
            alt="Tranche d'age"
            className="baby-icon"
          />
          <span className="specialities-text">Actifs</span>
        </div>
        <div className="specialities-item">
          <img
            src="/icones/hero-icones/PNG/TrancheAge.png"
            alt="Adults"
            className="adults-icon"
          />
          <span className="specialities-text">Seniors et Mobilité</span>
        </div>
      </section>

      {/* Specialities 2 Section  */}
      <section className="specialities-info">
        <h2 className="specialities-subtitle"> Zones d’Intervention </h2>
        <div className="specialities-item">
          <img
            src="/icones/hero-icones/PNG/Diplome.png"
            alt="degree"
            className="degree-icon"
          />
          <span className="specialities-text">Articulations</span>
        </div>
        <div className="specialities-item">
          <img
            src="/icones/hero-icones/PNG/Chrono.png"
            alt="Bienveillance"
            className="heart-icon"
          />
          <span className="specialities-text">ORL</span>
        </div>
        <div className="specialities-item">
          <img
            src="/icones/hero-icones/PNG/Bienveillance.png"
            alt="timer"
            className="timer-icon"
          />
          <span className="specialities-text">Système Digestif</span>
        </div>
        <div className="specialities-item">
          <img
            src="/icones/hero-icones/PNG/TrancheAge.png"
            alt="Tranche d'age"
            className="baby-icon"
          />
          <span className="specialities-text">Mâchoire</span>
        </div>
        <div className="specialities-item">
          <img
            src="/icones/hero-icones/PNG/TrancheAge.png"
            alt="Tranche d'age"
            className="foot-icon"
          />
          <span className="specialities-text">Pieds</span>
        </div>
      </section>
    </div>
  );
};

export default Specialities;
