import { styled } from "styled-components";

export const MainStayled = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d9d9d9;
  height: 100vh;
  width: 100vw;
`;

export const DivStayled = styled.div`
  display: flex;
  max-width: 780px;
  flex-direction: column;
  padding: 10px 35px 20px 35px;
  border-radius: 15px;
  gap: 10px;
  background-color: #07c17e;
  margin: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  align-items: center;
  color: white;
`;

export const LogoStyled = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background-color: white;
`;
