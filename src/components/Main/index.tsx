import React from "react";
import { DivStayled, LogoStyled, MainStayled } from "./style";
import { CardSelectStyled } from "../CardSelect/styles";
import { useState, useContext } from "react";
import CardSelect from "../CardSelect";
import CardLogin from "../CardLogin";
import { GiSoccerBall } from "react-icons/gi";
import { UserContext } from "../../providers/user.Context";

function Main() {
  const [send, setSend] = useState(false);
  const { isLoged } = useContext(UserContext);

  return (
    <MainStayled>
      <DivStayled>
        <GiSoccerBall size={150} />
        <h3>Meu Time</h3>
        {isLoged === true ? null : <CardLogin children={null} />}
        {isLoged === true ? <CardSelect children={null} /> : null}
      </DivStayled>
    </MainStayled>
  );
}

export default Main;
