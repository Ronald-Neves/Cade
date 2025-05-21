import React from "react";
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
  LinkRow,
  Link,
  CheckboxWrapper,
  Label
} from "./styles";

import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Você pode adicionar validação aqui
    navigate("/home");
  };

  const handleCadastro = (e) => {
    e.preventDefault();
    navigate("/cadastro");
  };

  return (
    <Container>
      <Box>
        

        <RightPanel>
          <Title>Login</Title>
          <Subtitle>Entre com seus dados para continuar</Subtitle>
          <Form onSubmit={handleLogin}>
            <Input type="text" placeholder="Nome de usuário" required />
            <Input type="password" placeholder="Senha" required />
            <CheckboxWrapper>
              <input type="checkbox" id="remember" />
              <Label htmlFor="remember">Lembrar de mim</Label>
            </CheckboxWrapper>
            <Button type="submit">ENTRAR</Button>
            <LinkRow>
              <span>
                Não tem conta?{" "}
                <Link as="a" href="#" onClick={handleCadastro}>
                  Cadastrar
                </Link>
              </span>
              <Link as="a" href="#">Esqueceu a senha?</Link>
            </LinkRow>
          </Form>
        </RightPanel>
      </Box>
    </Container>
  );
}

export default Login;
