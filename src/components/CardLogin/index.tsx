import React from "react";
import { ChangeEvent, useContext } from "react";
import { CardSelectStyled } from "../CardSelect/styles";
import { iChildren } from "../../interfaces";
import { InputStyled } from "./styles";
import { ButtonStyled } from "../Button/styles";
import { UserContext } from "../../providers/user.Context";
function CardLogin(children: iChildren) {
  const { HandleLogin, token, setToken } = useContext(UserContext);

  const handleApiKey = (api: ChangeEvent<HTMLInputElement>) => {
    /* setToken(api.target.value);
    localStorage.setItem("token", api.target.value);
    HandleLogin(token);
    console.log(token); */
    const token = api.target.value;
    console.log(token);
    setToken(token);
    localStorage.setItem("token", token);
  };

  return (
    <>
      <label htmlFor="Login">Insira sua API KEY para fazer Login</label>
      <CardSelectStyled>
        <InputStyled
          type="text"
          id="Login"
          value={token}
          placeholder="insira sua Api Key"
          onChange={handleApiKey}
        />
      </CardSelectStyled>
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
