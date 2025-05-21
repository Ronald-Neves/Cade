import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 2px solid #ddd;
  border-radius: 8px;
  margin-bottom: 24px;

  &:focus {
    outline: none;
    border-color: #ff595e;
  }
`;

export const ResultsGrid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
`;

export const ResultCard = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const ResultImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

export const ResultInfo = styled.div`
  padding: 16px;

  h3 {
    font-size: 20px;
    margin-bottom: 8px;
    color: #222;
  }

  p {
    font-size: 14px;
    color: #666;
  }
`;
