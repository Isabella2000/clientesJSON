import {  createContext, useEffect, useState } from "react";
//Crear contexto
const ClientesContext = createContext();

//Crear el "proveedor" del contexto
const ClientesProvider = ({ children }) => {

  const [data, setData] = useState([]);
  

  const obtenerData = async () => {
    try {
      const res = await fetch("./src/db/data.json"); //PETICION || CONSULTA
      const data = await res.json(); //CONVERSION DE INFORMACION A JSON PARA SU USO

      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    obtenerData();
  }, []);

  return (
    <ClientesContext.Provider value={{ data, setData }}>
      {children}
    </ClientesContext.Provider>
  );
};

export { ClientesContext };

export default ClientesProvider;
