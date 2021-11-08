import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";

const Customer = ({ members }) => {
  const params = useParams();
  const member = members.filter((e) => e.id === params.id);
  return (
    <div>
      <h1>Detalhes do cliente</h1>

      <p>Nome: {member && member.map((item) => item.name)}</p>

      <Link to="/">Voltar</Link>
    </div>
  );
};
export default Customer;
