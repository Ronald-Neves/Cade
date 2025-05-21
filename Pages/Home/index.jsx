import React from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Container, MenuItem, FooterMenu, Banner, SectionTitle, CategoryGrid, CategoryItem } from "./styles";
import { FiHome, FiSearch, FiBriefcase, FiUser } from "react-icons/fi"; // ícones estilo iFood

function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  // função para verificar rota ativa
  const isActive = (path) => location.pathname === path;

  return (
    <Container>
      <Outlet />

      <FooterMenu>
        <MenuItem onClick={() => navigate("/home")} active={isActive("/home")}>
          <FiHome />
          Início
        </MenuItem>
        <MenuItem
          onClick={() => navigate("/home/busca")}
          active={isActive("/home/busca")}
        >
          <FiSearch />
          Busca
        </MenuItem>
        <MenuItem
          onClick={() => navigate("/home/servico")}
          active={isActive("/home/servico")}
        >
          <FiBriefcase />
          Serviços
        </MenuItem>
        <MenuItem
          onClick={() => navigate("/home/perfil")}
          active={isActive("/home/perfil")}
        >
          <FiUser />
          Perfil
        </MenuItem>
      </FooterMenu>
    </Container>
  );
}

export default Home;
