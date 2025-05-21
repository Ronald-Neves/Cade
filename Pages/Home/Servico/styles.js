import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 24px;
  color: #333;
  text-align: center;
`;

export const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

export const ServiceCard = styled.div`
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const ServiceImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

export const ServiceInfo = styled.div`
  padding: 16px;

  h3 {
    font-size: 20px;
    margin-bottom: 8px;
    color: #222;
  }

  p {
    font-size: 14px;
    color: #666;
    margin-bottom: 16px;
  }
`;

export const ServiceButton = styled.button`
  background-color: #ff595e;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  font-size: 14px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0484c;
  }
`;
