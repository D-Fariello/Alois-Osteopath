import React from "react";
import Header from "../components/Header";

const Specialities = () => {
  const specialitiesLife = [
    { icon: "Diplome.png", alt: "Degree", text: "Futures Mamans" },
    {
      icon: "Chrono.png",
      alt: "Bienveillance",
      text: "Nourrissons et Enfants",
    },
    { icon: "Bienveillance.png", alt: "Timer", text: "Sportifs" },
    { icon: "TrancheAge.png", alt: "TrancheAge", text: "Actifs" },
    { icon: "TrancheAge.png", alt: "Adults", text: "Seniors et Mobilité" },
  ];

  const specialitiesZones = [
    { icon: "Diplome.png", alt: "Degree", text: "Articulations" },
    { icon: "Chrono.png", alt: "Bienveillance", text: "ORL" },
    { icon: "Bienveillance.png", alt: "Timer", text: "Système Digestif" },
    { icon: "TrancheAge.png", alt: "TrancheAge", text: "Mâchoire" },
    { icon: "TrancheAge.png", alt: "Foot", text: "Pieds" },
  ];

  return (
    <>
      <Header />
      <div className="specialities-page">
        <section className="title-section">
          <h1 className="specialities-title">Spécialités</h1>
        </section>

        <section className="specialities-info">
          <div className="specialities-header">
            <h2 className="specialities-subtitle">Moments de vie</h2>
          </div>
          <div className="specialities-items">
            {specialitiesLife.map((item, index) => (
              <div className="specialities-item" key={index}>
                <img
                  src={`/icones/hero-icones/PNG/${item.icon}`}
                  alt={item.alt}
                  className={`icon-${item.alt.toLowerCase()}`}
                />
                <span className="specialities-text">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="specialities-info">
          <div className="specialities-header">
            <h2 className="specialities-subtitle">Zones d’Intervention</h2>
          </div>
          <div className="specialities-items">
            {specialitiesZones.map((item, index) => (
              <div className="specialities-item" key={index}>
                <img
                  src={`/icones/hero-icones/PNG/${item.icon}`}
                  alt={item.alt}
                  className={`icon-${item.alt.toLowerCase()}`}
                />
                <span className="specialities-text">{item.text}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Specialities;
