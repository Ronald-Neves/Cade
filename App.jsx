import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Cadastro from "./Pages/Cadastro";
import Home from "./Pages/Home"; // index.jsx que contém o <Outlet />
import Inicio from "./Pages/Home/Inicio";
import Busca from "./Pages/Home/Busca";
import Servico from "./Pages/Home/Servico";
import Perfil from "./Pages/Home/Perfil";
import EditarPerfil from "./Pages/Home/Perfil/EditarPerfil";
import Agendamentos from "./Pages/Home/Perfil/Agendamentos";
import Pagamento from "./Pages/Home/Perfil/Pagamento";
import Configuracoes from "./Pages/Home/Perfil/Configuracoe";
import Notificacoes from "./Pages/Home/Perfil/Notificacoe";
import Ajuda from "./Pages/Home/Perfil/Ajuda";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        {/* Rota principal para Home */}
        <Route path="/home" element={<Home />}>
          <Route index element={<Inicio />} /> {/* quando /home */}
          <Route path="busca" element={<Busca />} />
          <Route path="servico" element={<Servico />} />
          <Route path="perfil" element={<Perfil />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
