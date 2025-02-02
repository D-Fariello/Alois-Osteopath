import { useParams } from "react-router-dom";
import teamMembers from "../data/teamData";

const MemberDetail = () => {
  const { id } = useParams();
  const member = teamMembers.find((m) => m.id === parseInt(id));

  if (!member) {
    return <h2>Membre non trouvé</h2>;
  }

  return (
    <div className="member-detail">
      <img src={member.image} alt={member.name} />
      <h2>{member.name}</h2>
      <h3>{member.specialization}</h3>
      <p>
        <strong>Hobbies:</strong> {member.hobbies}
      </p>
      <p>{member.description}</p>
      <button>Prendre rendez-vous</button>
    </div>
  );
};

export default MemberDetail;
