import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserDoctor } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div>
      {/* Sezione 1 */}
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
          <p className="section-one-paragraph">Osteopathe Nice</p>
          <div className="hero-buttons">
            <button className="btn btn-primary"> Prendre Rendez-Vous</button>
            <button className="btn btn-secondary">Numero de tel</button>
          </div>
        </div>
      </section>

      {/* Sezione 2 */}
      <section className="cards-section">
        <h2 className="section-title-h2">
          {" "}
          Vous ressentez des douleurs ou des tensions difficiles à gérer ?
        </h2>
        <p className="section-subtitle">
          Tout au long de votre vie et selon votre parcours, vous pouvez
          rencontrer différentes douleurs ou problématiques:
        </p>
        <div className="cards-container">
          {Array(6)
            .fill()
            .map((_, index) => (
              <div className="card" key={index}>
                <FontAwesomeIcon icon={faUserDoctor} />
                <h3>Card Title {index + 1}</h3>
                <p className="section-details">
                  Brief description of the feature or product.
                </p>
              </div>
            ))}
        </div>
        <button className="btn btn-primary">See All Features</button>
      </section>
    </div>
  );
};

export default Hero;
