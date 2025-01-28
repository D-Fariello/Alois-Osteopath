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

  const iconItems = [
    {
      icon: "bienveillance.png",
      alt: "bienveillance",
      description: "Bienveillance",
    },
    { icon: "expertise.png", alt: "expertise", description: "Expertise" },
    { icon: "douceur.png", alt: "douceur", description: "Douceur" },
    { icon: "confiance.png", alt: "confiance", description: "Confiance" },
  ];

  const cardItems = [
    {
      title: "Card 1",
      text: "Grossesse et Lombalgies : Comment L’Ostéopathie Peut Vous Soulager",
      image: "CardImage1.jpg",
    },
    {
      title: "Card 2",
      text: "3 Exercices Simples pour Réduire les Tensions Pendant la Grossesse",
      image: "CardImage2.jpg",
    },
    {
      title: "Card 3",
      text: "Préparer Son Corps à l’Accouchement avec L’Ostéopathie",
      image: "CardImage3.jpg",
    },
    {
      title: "Card 4",
      text: "Soulager Sciatiques et Reflux : L’Ostéopathie au Service des Futures Mamans",
      image: "CardImage4.jpg",
    },
  ];

  const questions = [
    "À partir de quel mois de grossesse peut-on consulter ?",
    "Quels maux de grossesse l’ostéopathie peut-elle soulager (sciatique, lombalgies, reflux) ?",
    "Est-ce sans danger pour le bébé et la future maman ??",
    "L’ostéopathie peut-elle aider à préparer l’accouchement ?",
    "Quels exercices ou conseils un ostéopathe peut-il donner pour soulager les douleurs au quotidien ?",
    "L’ostéopathie peut-elle prévenir ou réduire les risques de fausse couche ?",
    "Doit-on choisir un ostéopathe spécialisé en périnatalité ?",
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
          <button className="values-button">Prenez rendez-vous </button>
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
                  src={`/images/${item.image}`}
                  alt={item.title}
                  className="card-image"
                />
                <h4>{item.title}</h4>
                <p>{item.text}</p>
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
