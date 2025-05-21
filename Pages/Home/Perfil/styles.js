import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;

export const Header = styled.div`
  align-items: center;
  text-align: center;
  margin-bottom: 30px;
`;

export const Avatar = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 45px;
  margin-bottom: 10px;
`;

export const Name = styled.h2`
  font-size: 20px;
  font-weight: bold;
`;

export const SectionTitle = styled.h3`
  font-size: 16px;
  color: #555;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const OptionList = styled.div`
  border-top: 1px solid #eee;
`;

export const OptionItem = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  padding: 12px 0;
  cursor: pointer;
  transition: background 0.2s;
  border-bottom: 1px solid #f0f0f0;

  &:hover {
    background-color: #f9f9f9;
  }
`;

export const OptionIcon = styled.div`
  margin-right: 15px;
  font-size: 18px;
  color: #555;
`;

export const OptionText = styled.span`
  font-size: 16px;
  color: #333;
`;

export const LogoutButton = styled(OptionItem)`
  margin-top: 30px;
  border: none;
  background-color: #ffecec;
  color: #d9534f;

  &:hover {
    background-color: #ffdede;
  }

  ${OptionText} {
    color: #d9534f;
    font-weight: bold;
  }

  ${OptionIcon} {
    color: #d9534f;
  }
`;
