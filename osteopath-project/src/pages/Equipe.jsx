import React from "react";
import { Link } from "react-router-dom";
import teamMembers from "../data/teamData";

const Equipe = () => {
  return (
    <div className="equipe-page">
      <section className="title-section">
        <h1 className="equipe-title">Equipe</h1>
      </section>

      {/* First Part: Image with Colored Background */}
      <section className="team-section-image-container">
        <h2 className="h2-team">Rencontrez notre équipe</h2>
        <img
          src="/icones/Spécialité-femmsEnceinte/30.png"
          alt="Descriptive Alt Text"
          className="team-image"
        />
        <p className="text-meet-the-team">
          Chez Pôle Ostéo, notre équipe de 8 ostéopathes passionnés met son
          expertise et sa bienveillance au service de votre bien-être. Chaque
          praticien est spécialisé dans des domaines spécifiques – grossesse,
          sport, mobilité, et bien plus – pour offrir une prise en charge
          complète et adaptée à vos besoins. Ensemble, nous partageons une
          mission commune : vous accompagner à chaque étape de votre parcours
          santé, avec des soins personnalisés et une écoute attentive.
        </p>
      </section>

      {/* Section images and names */}
      <section className="title-section-2">
        <h2 className="equipe-title-2">Notre Equipe</h2>
        <div className="team-members-div">
          <h3 className="h3-team">
            Des experts certifiés D.O. pour répondre à tous vos besoins
          </h3>
          <p className="text-meet-the-team">
            Notre équipe d’ostéopathes met à votre service une expertise variée
            et complémentaire pour vous offrir des soins adaptés à vos besoins
            spécifiques. Chacun de nos praticiens possède une spécialité qui lui
            permet d'accompagner différents profils, qu’il s’agisse de femmes
            enceintes, de sportifs, de bébés, ou de personnes souhaitant
            préserver leur mobilité.
          </p>
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
  );
};

export default Equipe;
