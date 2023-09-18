import { useContext } from "react";

import { ClientesContext } from "../context/ClientesProvider";

const ClientesHook = () => {
  return useContext(ClientesContext);
};

export default ClientesHook;
