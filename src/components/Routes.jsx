import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Cliente from "./Cliente";
import ClientesProvider from "../../context/ClientesProvider";

const Principal = () => {
  return (
    <ClientesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="/:id" element={<Cliente />} />
        </Routes>
      </BrowserRouter>
    </ClientesProvider>
  );
};

export default Principal;
