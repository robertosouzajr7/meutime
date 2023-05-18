import { styled } from "styled-components";

export const ButtonStyled = styled.button`
  width: 100%;
  height: 30px;
  background-color: white;
  color: green;
  font-weight: bold;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  :hover {
    color: blue;
    background-color: black;
  }

  :active {
    background-color: black;
  }
`;
