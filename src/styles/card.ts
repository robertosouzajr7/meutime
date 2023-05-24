import { styled } from "styled-components";

export const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 780px;
  width: 100%;
  min-width: 320px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 320px) {
    table {
      width: 320px;
    }
  }

  table,
  th,
  td {
    border: 1px solid black;
  }

  table {
    border-collapse: collapse;
    margin: auto;
  }

  th,
  td {
    padding: 10px;
    text-align: center;
    width: 120px;
  }

  th {
    font-weight: bold;
  }

  tr:nth-child(even) {
    background-color: #dcebe6;
  }

  tr:hover:nth-child(1n + 2) {
    background-color: #085f63;
    color: #fff;
  }

  .ulPlayers {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    cursor: pointer;

    .liPlayers {
      display: flex;
      width: 100px;
      flex-direction: column;
      list-style: none;
      justify-content: center;
      align-items: center;
      padding: 10px;
      border-radius: 4px;
      cursor: pointer;

      img {
        width: 50px;
        border-radius: 50%;
      }
      p {
        text-align: left;
        font-size: 12px;
      }
    }
  }

  label {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    select {
      display: flex;
      color: black;
      flex-direction: column;
      max-width: 400px;
      width: 100%;
      height: 30px;
      border: 1px solid black;
      border-radius: 4px;
      option {
        width: 100%;
        max-width: 400px;
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

export const ButtonStyled = styled.button`
  max-width: 418px;
  width: 100%;
  min-width: 70px;
  height: 30px;
  background-color: white;
  color: green;
  font-weight: bold;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    color: black;
    background-color: yellow;
  }

  :active {
    background-color: black;
  }
`;
