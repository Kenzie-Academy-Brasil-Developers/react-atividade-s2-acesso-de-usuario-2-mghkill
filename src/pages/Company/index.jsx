import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Company = ({ members }) => {
  const params = useParams();
  const member = members.filter((e) => e.id === params.id);

  return (
    <div>
      <div>
        <h1>Detalhes da Empresa</h1>

        <p>Nome da empresa: {member && member.map((item) => item.name)}</p>

        <Link to="/">Voltar</Link>
      </div>
    </div>
  );
};
export default Company;
