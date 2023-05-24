import React from "react";
import { ChangeEvent, useContext } from "react";
import { InputStyled } from "./styles";
import { UserContext } from "../../providers/user.Context";
import { CardStyled, ButtonStyled } from "../../styles/card";
function CardLogin() {
  const { HandleLogin, token, setToken } = useContext(UserContext);

  const handleApiKey = (api: ChangeEvent<HTMLInputElement>) => {
    const token = api.target.value;
    setToken(token);
    localStorage.setItem("token", token);
  };

  return (
    <>
      <label htmlFor="Login">Insira sua API KEY para fazer Login</label>
      <CardStyled>
        <InputStyled
          type="text"
          id="Login"
          value={token}
          placeholder="insira sua Api Key"
          onChange={handleApiKey}
        />
      </CardStyled>
      <ButtonStyled onClick={() => HandleLogin()}>Fazer Login</ButtonStyled>
      <p>
        Não possui conta?
        <a href="https://rapidapi.com/api-sports/api/api-football/pricing">
          Inscreva-se
        </a>
      </p>
    </>
  );
}

export default CardLogin;
