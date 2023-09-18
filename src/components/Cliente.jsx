import React from "react";
import { useParams } from "react-router-dom";
import ClientesHook from "../../hooks/ClientesHook";

const Cliente = () => {
  const { id } = useParams(); //viene de la url, mira el routes.jsx es la parte path="/:id"
  const { data } = ClientesHook(); //data general que ahora se encuentra ern ClientesProvider

  const [cliente] = data.filter((d) => d.id == id);

  return (
    <div>
      <p>{cliente.nombre}</p>
      <p>{cliente.apellido}</p>
      <p>{cliente.direccion}</p>
    </div>
  );
};

export default Cliente;
