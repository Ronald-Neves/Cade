import React from "react";
import {
  Content,
  Header,
  Logo,
  Location,
  Card,
  Banner,
  SectionTitle,
  CategoryGrid,
  CategoryItem,
} from "../styles";

function Inicio() {
  return (
    <>
      <Header>
        <Logo>Cade</Logo>
        <Location>Atendendo em: Av. Central, 456</Location>
      </Header>

      <Content>
        <Banner>
          <img
            src="http://www.imagens.usp.br/wp-content/uploads/2010/03/saopaulo006.jpg"
            alt="Promoção de Serviços"
          />
        </Banner>

        <SectionTitle>Serviços Populares</SectionTitle>
        <CategoryGrid>
          <CategoryItem>
            <img
              src="https://novonegocio.com.br/wp-content/uploads/2012/07/Eletricista-Veja-Como-Ser-um-Bom-Profissional.jpg"
              alt="Eletricista"
            />
            <span>Eletricista</span>
          </CategoryItem>

          <CategoryItem>
            <img
              src="https://tacontratado.com.br/wp-content/uploads/2021/08/encanador.jpg"
              alt="Encanador"
            />
            <span>Encanador</span>
          </CategoryItem>

          <CategoryItem>
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.kDYBqbVUz4Ayhh4GMiGD6QHaE8&pid=Api&P=0&h=180"
              alt="Cabeleireiro"
            />
            <span>Cabeleireiro</span>
          </CategoryItem>

          <CategoryItem>
            <img
              src="https://blog.princesatoalhas.com.br/wp-content/uploads/2020/08/manicure-sucesso.jpg"
              alt="Manicure"
            />
            <span>Manicure</span>
          </CategoryItem>
        </CategoryGrid>

        <SectionTitle>Promoções</SectionTitle>
        <Card>
          <h3>Desconto em Eletricista</h3>
          <p>10% OFF para serviços agendados até hoje às 20h.</p>
        </Card>

        <Card>
          <h3>Manicure Delivery</h3>
          <p>Atendimento em domicílio por R$ 29,90</p>
        </Card>
      </Content>
    </>
  );
}

export default Inicio;
