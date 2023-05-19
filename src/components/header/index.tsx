import React, { useContext } from "react";
import { HeaderStyled } from "./styles";
import { GiSoccerBall } from "react-icons/gi";
import { UserContext } from "../../providers/user.Context";

function Header(data: any) {
  const { GetStatistcs, setShowScore } = useContext(UserContext);
  const Mostrar = () => {
    setShowScore(true);
    GetStatistcs();
  };
  return (
    <HeaderStyled>
      <div>
        <GiSoccerBall size={50} />
        <h2>Meu Time {data.time}</h2>
      </div>
      <ul>
        <li>
          <a href="">Meu Time</a>
        </li>
        <li>
          <a href="#">Jogadores</a>
        </li>
        <li>
          <a href="#" onClick={Mostrar}>
            Statisticas
          </a>
        </li>
      </ul>
    </HeaderStyled>
  );
}

export default Header;
