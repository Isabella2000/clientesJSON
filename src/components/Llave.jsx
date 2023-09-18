import React from "react";
import { Link } from "react-router-dom";

const Llave = ({ d, setDataEdit, clientesEliminados }) => {

  const editarCliente = () => {
    return setDataEdit(d);
  };

  const eliminarCliente = () => {
    return clientesEliminados(d.id)
  };

  return (
    <Link to={`/${d.id}`}>
      {/* <div>{pokemons.url}</div> */}
      <p>{d.id}</p>
      <p>{d.nombre}</p>
      <p>{d.apellido}</p>
      <p>{d.direccion}</p>
      <p>{d.correo}</p>
      <p>{d.telefono}</p>
      <button
        className="mt-3 bg-blue-700 text-white rounded-sm p-2"
        onClick={editarCliente}
      >
        Editar
      </button>
      <button
        className="m-3 bg-red-700 text-white rounded-sm p-2"
        onClick={eliminarCliente}
      >
        Eliminar
      </button>
    </Link>
  );
};

export default Llave;
