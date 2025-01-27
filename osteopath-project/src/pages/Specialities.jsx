import React from "react";

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
    <div className="specialities-page">
      <section className="title-section">
        <h1 className="specialities-title">Spécialités</h1>
      </section>

      <div className="specialities-header">
        <h2 className="specialities-subtitle">Moments de vie</h2>
      </div>
      <div className="specialities-info">
        <div className="specialities-items">
          {specialitiesLife.map((item, index) => (
            <figure className="specialities-item" key={index}>
              <img
                src={`/icones/hero-icones/PNG/${item.icon}`}
                alt={item.alt}
                className={`icon-${item.alt.toLowerCase()}`}
              />
              <figcaption className="specialities-text">{item.text}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="specialities-header-2">
        <h2 className="specialities-subtitle-2">Zones d’Intervention</h2>
      </div>
      <div className="specialities-info-2">
        <div className="specialities-items-2">
          {specialitiesZones.map((item, index) => (
            <figure className="specialities-item-2" key={index}>
              <img
                src={`/icones/hero-icones/PNG/${item.icon}`}
                alt={item.alt}
                className={`icon-${item.alt.toLowerCase()}`}
              />
              <figcaption className="specialities-text-2">
                {item.text}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specialities;
