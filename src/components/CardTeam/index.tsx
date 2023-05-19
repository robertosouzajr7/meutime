import React from "react";
import { useContext } from "react";
import { UserContext } from "../../providers/user.Context";
import { CardStyled, ButtonStyled } from "../../styles/card";
import { LogoStyled } from "../Main/style";

function CardTeam() {
  const { team, getPlayes } = useContext(UserContext);

  return (
    <CardStyled>
      {team ? (
        <>
          <figure>
            <LogoStyled src={team.logo} />
          </figure>
          <ul style={{ alignItems: "flex-start" }}>
            <caption>{team.name}</caption>
            <li>País: {team.country}</li>
            <li>Fundado em: {team.founded}</li>
            <li>Código: {team.code}</li>
          </ul>
        </>
      ) : null}
      <ButtonStyled onClick={() => getPlayes()}>ver jogadores</ButtonStyled>
    </CardStyled>
  );
}

export default CardTeam;
