import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 60px; /* espaço para o menu fixo */
  background-color: #f7f7f7;
  min-height: 100vh;
`;

export const Header = styled.header`
  padding: 1rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

export const Logo = styled.h1`
  color: #ff3d00;
  font-size: 1.5rem;
`;

export const Location = styled.p`
  font-size: 0.9rem;
  color: #555;
`;

export const Content = styled.div`
  padding: 1rem;
`;

export const Card = styled.div`
  background-color: #fff;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8rem;
  color: #555;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 4px;
    border: 2px solid #eee;
  }

  &:hover {
    color: #ea1d2c;
  }
`;

export const FooterMenu = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #ddd;
  z-index: 999;
`;
export const Banner = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.1rem;
  margin: 1rem 0 0.5rem;
  color: #333;
`;

export const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.75rem;
  color: ${(props) => (props.active ? "#ea1d2c" : "#999")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  cursor: pointer;
  transition: 0.2s;

  svg {
    font-size: 1.4rem;
    margin-bottom: 2px;
    color: ${(props) => (props.active ? "#ea1d2c" : "#999")};
  }

  &:hover {
    color: #ea1d2c;

    svg {
      color: #ea1d2c;
    }
  }
`;
