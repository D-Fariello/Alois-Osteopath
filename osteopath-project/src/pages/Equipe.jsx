import React, { useState } from "react";

const teamMembers = [
  {
    id: 1,
    name: "Isabelle Dessailly",
    image: "images/photo-team.avif",
  },
  {
    id: 2,
    name: "Atsushi Kitamoto",
    image: "images/photo-team.avif",
  },
  {
    id: 3,
    name: "Chloé Nakache",
    image: "images/photo-team.avif",
  },
  {
    id: 4,
    name: "Mélisse Guillard",
    image: "images/photo-team.avif",
  },
  {
    id: 5,
    name: "Isabelle Dessailly",
    image: "images/photo-team.avif",
  },
  {
    id: 6,
    name: "Atsushi Kitamoto",
    image: "images/photo-team.avif",
  },
  {
    id: 7,
    name: "Chloé Nakache",
    image: "images/photo-team.avif",
  },
  {
    id: 8,
    name: "Mélisse Guillard",
    image: "images/photo-team.avif",
  },
];

const Equipe = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="equipe-page">
      <section className="title-section">
        <h1 className="equipe-title">Equipe</h1>
      </section>
      <div>
        <section>
          {/* First Part: Image with Colored Background */}
          <div className="team-section-image-container">
            <h2 className="h2-team">Rencontrez notre équipe</h2>
            <img
              src="/icones/Spécialité-femmsEnceinte/30.png"
              alt="Descriptive Alt Text"
              className="team-image"
            />
            <p className="text-meet-the-team">
              Chez Pôle Ostéo, notre équipe de 8 ostéopathes passionnés met son
              expertise et sa bienveillance au service de votre bien-être.
              Chaque praticien est spécialisé dans des domaines spécifiques –
              grossesse, sport, mobilité, et bien plus – pour offrir une prise
              en charge complète et adaptée à vos besoins. Ensemble, nous
              partageons une mission commune : vous accompagner à chaque étape
              de votre parcours santé, avec des soins personnalisés et une
              écoute attentive.
            </p>
          </div>
        </section>

        {/* Section images and names */}
        <section>
          <div className="title-section-2">
            <section>
              <h2 className="equipe-title-2">Notre Equipe</h2>
            </section>
            <div className="team-members-div">
              <h3 className="h3-team">Rencontrez notre équipe</h3>
              <p className="text-meet-the-team">
                Chez Pôle Ostéo, notre équipe de 8 ostéopathes passionnés met
                son expertise et sa bienveillance au service de votre bien-être.
                Chaque praticien est spécialisé dans des domaines spécifiques –
                grossesse, sport, mobilité, et bien plus – pour offrir une prise
                en charge complète et adaptée à vos besoins. Ensemble, nous
                partageons une mission commune : vous accompagner à chaque étape
                de votre parcours santé, avec des soins personnalisés et une
                écoute attentive.
              </p>
            </div>
          </div>
          <section className="photos-team-members">
            {teamMembers.map((member) => (
              <div className="photos-team" key={member.id}>
                <img
                  className="members-img"
                  src={member.image}
                  alt={member.name}
                />
                <div>
                  <p className="members-name">{member.name}</p>
                  <button onClick={() => setSelectedMember(member)}>
                    En savoir plus
                  </button>
                </div>
              </div>
            ))}
          </section>
        </section>

        {/* Details Section */}
        {selectedMember && (
          <section>
            <img src={selectedMember.image} alt={selectedMember.name} />
            <div>
              <h3>{selectedMember.name}</h3>
              <p>{selectedMember.description}</p>
              <button>Prendre rendez-vous</button>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Equipe;
