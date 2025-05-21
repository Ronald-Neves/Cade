import styled from "styled-components";

export const Header = styled.header`
  background-color: #ff595e;
  padding: 16px;
  color: white;
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

export const Location = styled.span`
  font-size: 14px;
  margin-top: 4px;
`;

export const Content = styled.main`
  padding: 16px;
`;

export const Banner = styled.div`
  margin-bottom: 24px;

  img {
    width: 100%;
    border-radius: 8px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 18px;
  margin: 16px 0 8px;
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

export const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 8px;
  }

  span {
    font-size: 14px;
    text-align: center;
  }
`;

export const Card = styled.div`
  background-color: #f7f7f7;
  padding: 16px;
  margin-top: 12px;
  border-radius: 8px;

  h3 {
    margin-bottom: 8px;
    font-size: 16px;
  }

  p {
    font-size: 14px;
    color: #333;
  }
`;
