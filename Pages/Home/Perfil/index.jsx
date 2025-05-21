import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Header,
  Avatar,
  Name,
  SectionTitle,
  OptionList,
  OptionItem,
  OptionIcon,
  OptionText,
  LogoutButton,
} from "./styles";

import {
  FaUserEdit,
  FaHistory,
  FaCreditCard,
  FaCog,
  FaSignOutAlt,
  FaBell,
  FaQuestionCircle,
} from "react-icons/fa";

function Perfil() {
  const usuario = {
    nome: "Samuel Souza",
    avatar: "https://tse4.explicit.bing.net/th?id=OIP.KPFf8rTO-ICls97C8pZskAHaEK&pid=Api&P=0&h=180",
  };

  return (
    <Container>
      <Header>
        <Avatar src={usuario.avatar} alt={usuario.nome} />
        <Name>{usuario.nome}</Name>
      </Header>

      <SectionTitle>Conta</SectionTitle>
      <OptionList>
        <OptionItem as={Link} to="/home/perfil/editar">
          <OptionIcon><FaUserEdit /></OptionIcon>
          <OptionText>Editar Perfil</OptionText>
        </OptionItem>
        <OptionItem as={Link} to="/home/perfil/agendamentos">
          <OptionIcon><FaHistory /></OptionIcon>
          <OptionText>Meus Agendamentos</OptionText>
        </OptionItem>
        <OptionItem as={Link} to="/home/perfil/pagamento">
          <OptionIcon><FaCreditCard /></OptionIcon>
          <OptionText>Formas de Pagamento</OptionText>
        </OptionItem>
      </OptionList>

      <SectionTitle>Preferências</SectionTitle>
      <OptionList>
        <OptionItem as={Link} to="/home/perfil/notificacoes">
          <OptionIcon><FaBell /></OptionIcon>
          <OptionText>Notificações</OptionText>
        </OptionItem>
        <OptionItem as={Link} to="/home/perfil/configuracoes">
          <OptionIcon><FaCog /></OptionIcon>
          <OptionText>Configurações</OptionText>
        </OptionItem>
        <OptionItem as={Link} to="/home/perfil/ajuda">
          <OptionIcon><FaQuestionCircle /></OptionIcon>
          <OptionText>Ajuda</OptionText>
        </OptionItem>
      </OptionList>

      <LogoutButton>
        <OptionIcon><FaSignOutAlt /></OptionIcon>
        <OptionText>Sair</OptionText>
      </LogoutButton>
    </Container>
  );
}

export default Perfil;
