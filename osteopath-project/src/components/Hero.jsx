import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="hero-section">
        <div className="hero-image-container">
          <img
            src="./images/doctor-studio.avif"
            alt="Hero"
            className="hero-image"
          />
        </div>
        <div className="hero-text">
          <h1>Aloïs Ruetsch</h1>
          <p>Osteopathe Nice</p>
          <div className="hero-buttons">
            <button className="btn btn-primary"> Prendre Rendez-Vous</button>
            <button className="btn btn-secondary">Numero de tel</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
