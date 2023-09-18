import React, { useEffect } from "react";
import { useState } from "react";

const Formulario = ({ data, setData, dataEdit, setDataEdit }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [direccion, setDireccion] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState(0);

  useEffect(() => {
    if (Object.keys(dataEdit).length > 0) {
      setNombre(dataEdit.nombre);
      setApellido(dataEdit.apellido);
      setDireccion(dataEdit.direccion);
      setCorreo(dataEdit.correo);
      setTelefono(dataEdit.telefono);
    }

    /*
    dataEdit = {
      nombre: "asd",
      apellidos : "" 
    }*/
  }, [dataEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // validacion
    if ([nombre, apellido, direccion, correo].includes("")) {
      console.log("Tiene campos vacios");
      return
    }
    
    const ids = data.map((d) => d.id);

    const objetoData = {
      nombre,
      apellido,
      direccion,
      correo,
      telefono,
    };

    if (dataEdit.id) {
      objetoData.id = dataEdit.id;

      // Editando
      const clientesEditados = data.map(
        (dataState) => (dataState.id == dataEdit.id ? objetoData : dataState)

        // si dataState.id == dataEdit.id
        // dataState.nombre = juancho --- pasa a ser
        // objetoData.nombre = david --- lo que será
        // dataState.nombre = david
        // si no encuentra el id dataState.nombre = dataState.nombre
      );

      setData(clientesEditados);
      setDataEdit({});
      
      setNombre("");
      setApellido("");
      setCorreo("");
      setDireccion("");
      setTelefono("");
    } else {
      // insertando
      objetoData.id = Math.max(...ids) + 1;
      setData([...data, objetoData]);
    }
    setNombre("");
    setApellido("");
    setCorreo("");
    setDireccion("");
    setTelefono("");
  };

  return (
    <>
      <form className="mb-10" onSubmit={handleSubmit}>
        {/* <h1>{cliente}</h1> */}
        <h1>Formulario CLientes</h1>

        <div className="mb-4">
          <label htmlFor="nombre">Nombre:</label>
          <input
            className="border border-indigo-600"
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="apellido">Apellido:</label>
          <input
            className="border border-indigo-600"
            type="text"
            id="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="direccion">Direccion:</label>
          <input
            className="border border-indigo-600"
            type="text"
            id="direccion"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="correo">Correo:</label>
          <input
            className="border border-indigo-600"
            type="email"
            id="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="telefono">Telefono:</label>
          <input
            className="border border-indigo-600"
            type="number"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>

        <input type="submit" />
      </form>
    </>
  );
};

export default Formulario;
