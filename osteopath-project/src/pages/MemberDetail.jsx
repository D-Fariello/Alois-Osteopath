import { useParams } from "react-router-dom";
import teamMembers from "../data/teamData";

const MemberDetail = () => {
  const { id } = useParams();
  const member = teamMembers.find((m) => m.id === Number(id));

  if (!member) {
    return <h2>Membre non trouvé</h2>;
  }

  return (
    <div className="member-detail">
      <section className="title-section">
        <h1 className="equipe-title">Equipe</h1>
      </section>
      <div className="description-div">
        <img
          className="image-member-page"
          src={member.image}
          alt={member.name}
        />
        <div className="details-descritpion">
          <h2 className="member-title">{member.name}</h2>
          <p className="member-description">{member.description}</p>
          <button className="button-member-page">Prendre rendez-vous</button>
        </div>
      </div>
      <h3>{member.specialization}</h3>
    </div>
  );
};

export default MemberDetail;
