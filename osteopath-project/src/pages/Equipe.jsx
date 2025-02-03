import React from "react";
import { Link } from "react-router-dom";
import teamMembers from "../data/teamData";

const Equipe = () => {
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
                <div className="image-container">
                  <img
                    className="members-img"
                    src={member.image}
                    alt={member.name}
                  />
                  <Link to={`/equipe/${member.id}`}>
                    <button className="hidden-button">En savoir plus</button>
                  </Link>
                </div>
                <p className="members-name">{member.name}</p>
              </div>
            ))}
          </section>
        </section>
      </div>
    </div>
  );
};

export default Equipe;
