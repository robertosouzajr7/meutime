import { styled } from "styled-components";

export const CardSelectStyled = styled.div`
  background-color: white;
  align-items: center;
  display: flex;
  flex-direction: column;
  border-radius: 4px;

  label {
    display: flex;
    width: 100%;
    select {
      display: flex;
      color: black;
      flex-direction: column;
      width: 100%;
      height: 30px;
      border: 1px solid black;
      border-radius: 4px;
      option {
        width: 100%;
        display: flex;
        align-content: center;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;

    > select {
      width: 100%;
      min-width: 200px;
    }
  }
`;

export const CardCountyStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: transparent;

  label {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;
    select {
      display: flex;
      color: black;
      flex-direction: column;
      width: 100%;
      height: 30px;
      border: 1px solid black;
      border-radius: 4px;
      option {
        width: 100%;
        display: flex;
        align-content: center;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;

    > select {
      width: 100%;
      min-width: 200px;
    }
  }
`;
