import React, { useContext } from "react";
import { UserContext } from "../../providers/user.Context";
import { ButtonStyled, CardStyled } from "../../styles/card";
import CardLineups from "../Cardlineups";

function Cardplayers() {
  const { squad } = useContext(UserContext);

  return (
    <CardStyled>
      {squad ? (
        <ul className="ulPlayers">
          {squad[0].players.map((player) => (
            <li className="liPlayers" key={player.id}>
              <img src={player.photo} alt={`foto jogador ${player.name}`} />
              <p>
                {" "}
                Nome: {player.name} <br />
                Idade: {player.age}
                <br />
                Posição: {player.position}
              </p>
            </li>
          ))}
        </ul>
      ) : null}
      <CardLineups />
    </CardStyled>
  );
}

export default Cardplayers;
