import React from "react";
import { HeaderStyled } from "./styles";
import { GiSoccerBall } from "react-icons/gi";

function Header(data: any) {
  return (
    <HeaderStyled>
      <div>
        <GiSoccerBall size={50} />
        <h2>Meu Time {data.time}</h2>
      </div>
      <ul>
        <li>
          <a href="#">Meu Time</a>
        </li>
        <li>
          <a href="#">Jogadores</a>
        </li>
        <li>
          <a href="#">Statisticas</a>
        </li>
      </ul>
    </HeaderStyled>
  );
}

export default Header;
