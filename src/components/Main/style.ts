import { styled } from "styled-components";

export const MainStayled = styled.main`
  display: flex;
  width: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #d9d9d9;
  padding: 20px;
  gap: 10px;
  height: 100vh;

  .section {
    display: flex;
    width: 780px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

export const DivStayled = styled.div`
  display: flex;
  max-width: 420px;
  background-color: #07c17e;
  width: 100%;
  flex-direction: column;
  border-radius: 15px;
  gap: 5px;
  align-items: center;
  align-content: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 15px;
  color: white;
  justify-content: center;
`;

export const LogoStyled = styled.img`
  padding: 20px;
  width: 100px;
`;
