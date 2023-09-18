import { useEffect, useState } from "react";
import Llave from "./components/Llave";
import Formulario from "./components/Formulario";
import ClientesHook from "../hooks/ClientesHook";

function App() {

  const {data, setData} = ClientesHook()

  const [dataEdit, setDataEdit] = useState({});

  const clientesEliminados = (id) => {
    if (id) {
      const clientesActualizados = data.filter((c) => c.id != id);
      setData(clientesActualizados);
    }
  };


  return (
    <div className="flex">
      <Formulario
        data={data}
        setData={setData}
        dataEdit={dataEdit}
        setDataEdit={setDataEdit}
      />

      <div>
        {data.map((d) => (
          <Llave
            key={d.id}
            d={d}
            setDataEdit={setDataEdit}
            clientesEliminados={clientesEliminados}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
