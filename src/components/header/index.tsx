import React, { useContext, useEffect } from "react";
import { HeaderStyled } from "./styles";
import { GiSoccerBall } from "react-icons/gi";
import { UserContext } from "../../providers/user.Context";
import { ButtonStyled } from "../../styles/card";

function Header(data: any) {
  const { setIsged, setShowPlayer, isLoged, setShowTeam } =
    useContext(UserContext);

  const Mostrar = () => {
    setIsged(false);
    setShowPlayer(false);
    setShowTeam(false);
  };
  return (
    <HeaderStyled>
      <div>
        <GiSoccerBall size={50} />
        <h2>Meu Time</h2>
      </div>
      <ul>
        {isLoged ? (
          <li>
            <ButtonStyled type="button" onClick={Mostrar}>
              Sair
            </ButtonStyled>
          </li>
        ) : (
          <li></li>
        )}
      </ul>
    </HeaderStyled>
  );
}

export default Header;
