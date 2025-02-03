import React from "react";
import {
  specialitiesLife,
  specialitiesZones,
  bulletPoints,
  iconItems,
  cardItems,
  questions,
} from "../data/specialitiesData";

const Specialities = () => {
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
            src="/icones/Spécialité-femmsEnceinte/photo-specialities.avif"
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

      {/* Values Section */}
      <section className="values-section">
        <div className="values-title-div">
          <h2 className="values-title">Valeurs</h2>
        </div>
        <div className="values-first-div">
          <div className="icons-values-container">
            {iconItems.map((item, index) => (
              <div className="icon-item" key={index}>
                <img
                  src={`/icones/Spécialité-valeur/${item.icon}`}
                  alt={item.alt}
                  className="icon-img"
                />
                <p className="item-name">{item.description}</p>
              </div>
            ))}
          </div>
          <a
            href="https://www.doctolib.fr/osteopathe/nice/alois-ruetsch"
            target="_blank"
          >
            <button className="values-button">Prenez rendez-vous</button>
          </a>
        </div>
      </section>

      {/* Second Values Section */}
      <section className="second-values-section">
        <div className="second-values-div">
          <h3 className="second-values-title">
            Les derniers articles de blog pour les femmes enceintes
          </h3>
          <div className="cards-container">
            {cardItems.map((item, index) => (
              <div className="card-item" key={index}>
                <img
                  src={`/icones/Spécialité-femmsEnceinte/${item.image}`}
                  alt={item.title}
                  className="card-image"
                />
                <p className="text-pregnancy-card">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Third Values Section */}
      <section className="third-values-section">
        <div className="third-values-div">
          <h3 className="third-values-title">FAQ</h3>
          <div className="third-values-container">
            <div className="third-values-column">
              {questions.slice(0, 3).map((question, index) => (
                <p key={index} className="question">
                  {question}
                </p>
              ))}
            </div>
            <div className="third-values-faq-column">
              {questions.slice(3).map((question, index) => (
                <p key={index} className="question">
                  {question}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Specialities;
