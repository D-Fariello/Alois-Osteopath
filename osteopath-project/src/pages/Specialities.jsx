import React from "react";

const Specialities = () => {
  const specialitiesLife = [
    {
      icon: "Femme-enceinte.png",
      alt: "Femme-enceinte",
      text: "Futures Mamans",
    },
    {
      icon: "Bebé.png",
      alt: "Bebé",
      text: "Nourrissons et Enfants",
    },
    { icon: "Sportif.png", alt: "Sportif", text: "Sportifs" },
    { icon: "Actif.png", alt: "Actif", text: "Actifs" },
    { icon: "Senior.png", alt: "Senior", text: "Seniors et Mobilité" },
  ];

  const specialitiesZones = [
    { icon: "Articulations.png", alt: "Articulations", text: "Articulations" },
    { icon: "ORL.png", alt: "ORL", text: "ORL" },
    {
      icon: "Systeme-digestif.png",
      alt: "Systeme-digestif",
      text: "Système Digestif",
    },
    { icon: "Mâchoire.png", alt: "Mâchoire", text: "Mâchoire" },
    { icon: "Pied.png", alt: "Pied", text: "Pieds" },
  ];

  const bulletPoints = [
    {
      title: "Soulagement des Douleurs Lombaires et Pelviennes",
      points: [
        "Rééquilibre les tensions musculaires et ligamentaires dans le bas du dos et le bassin.",
        "Améliore la posture pour réduire la pression sur la colonne vertébrale et les articulations.",
        "Facilite la mobilité du bassin pour préparer l’accouchement.",
      ],
    },
    {
      title: "Apaisement des Troubles Digestifs",
      points: [
        "Soulage les tensions au niveau du diaphragme, facilitant la digestion et réduisant les reflux gastriques.",
        "Améliore la mobilité des organes abdominaux pour limiter la constipation et les ballonnements.",
      ],
    },
    {
      title: "Amélioration des Migraines",
      points: [
        "Relâche les tensions musculaires et crâniennes (nuque, épaules, fascias).",
        "Améliore la circulation sanguine et réduit les compressions nerveuses.",
        "Diminue la fréquence et l’intensité des crises.",
      ],
    },
  ];

  return (
    <div className="specialities-page">
      <section className="title-section">
        <h1 className="specialities-title">Spécialités</h1>
      </section>

      {/* Moments de vie */}
      <div className="specialities-header">
        <h2 className="specialities-subtitle">Moments de vie</h2>
      </div>
      <div className="specialities-info">
        <div className="specialities-items">
          {specialitiesLife.map((item, index) => (
            <figure className="specialities-item" key={index}>
              <img
                src={`/icones/moments-de-vie/${item.icon}`}
                alt={item.alt}
                className={`icon-${item.alt.toLowerCase()}`}
              />
              <figcaption className="specialities-text">{item.text}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Zones d’Intervention */}
      <div className="specialities-header-2">
        <h2 className="specialities-subtitle-2">Zones d’Intervention</h2>
      </div>
      <div className="specialities-info-2">
        <div className="specialities-items-2">
          {specialitiesZones.map((item, index) => (
            <figure className="specialities-item-2" key={index}>
              <img
                src={`/icones/Zones-dintervention/${item.icon}`}
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

      {/* Pregnancy Section */}
      <section className="pregnancy-section">
        {/* First Part: Image with Colored Background */}
        <div className="pregnancy-section-image-container">
          <img
            src="/icones/Spécialité-femmsEnceinte/30.png"
            alt="Descriptive Alt Text"
            className="pregnancy-image"
          />
        </div>

        {/* Second Part: Title and Bullet Points */}
        <div className="pregnancy-section-bullets">
          <h2 className="pregnancy-section-title">
            L’ostéopathie accompagne les femmes enceintes à chaque étape de leur
            grossesse pour soulager les douleurs et préparer l’accouchement{" "}
          </h2>
          <div className="bullet-categories">
            {bulletPoints.map((category, index) => (
              <div className="bullet-category" key={index}>
                <h3 className="bullet-category-title">{category.title}</h3>
                <ul className="bullet-category-list">
                  {category.points.map((point, idx) => (
                    <li key={idx} className="bullet-point">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Specialities;
