import React, { useState } from "react";
import {
  Container,
  Box,
  LeftPanel,
  RightPanel,
  Title,
  Subtitle,
  Form,
  Input,
  Button,
  Link,
  LinkRow,
  Label
} from "./styles.js";

import { useNavigate } from "react-router-dom";

function Cadastro() {
  const navigate = useNavigate();

  // estados para senha e confirmar senha
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [error, setError] = useState("");

  const handleCadastro = (e) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      setError("As senhas não conferem.");
      return;
    }

    // Se passou na validação, pode seguir
    setError("");
    // Aqui você pode validar ou enviar os dados
    // Por enquanto, apenas navega para a Home:
    navigate("/home");
  };

  return (
    <Container>
      <Box>
        <RightPanel>
          <Title>Cadastro</Title>
          <Subtitle>Preencha os dados abaixo para criar sua conta</Subtitle>
          <Form onSubmit={handleCadastro}>
            <Label>Nome de usuário</Label>
            <Input type="text" placeholder="Digite seu nome de usuário" required />

            <Label>Email</Label>
            <Input type="email" placeholder="Digite seu email" required />

            <Label>Senha</Label>
            <Input
              type="password"
              placeholder="Digite sua senha"
              required
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />

            <Label>Confirmar senha</Label>
            <Input
              type="password"
              placeholder="Confirme sua senha"
              required
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
            />

            {error && <p style={{ color: "red", marginTop: "0.5rem" }}>{error}</p>}

            <Button type="submit">CADASTRAR</Button>

            <LinkRow>
              <span>
                Já tem conta? <Link href="/">Entrar</Link>
              </span>
            </LinkRow>
          </Form>
        </RightPanel>
      </Box>
    </Container>
  );
}

export default Cadastro;
