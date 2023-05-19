import { styled } from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  height: 70px;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: #07c17e;
  color: white;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  ul {
    display: flex;
    gap: 10px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    list-style: none;

    li {
      list-style: none;

      a {
        list-style: none;
        color: white;
        text-decoration: none;
        &:hover {
          text-decoration: wavy;
          color: green;
          cursor: pointer;
          transition: 0.3s;
          font-weight: bold;
        }
      }
    }
  }
`;
