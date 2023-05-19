import React from "react";
import { DivStayled, MainStayled } from "./style";
import { useContext } from "react";
import CardSelect from "../CardSelect";
import CardLogin from "../CardLogin";
import { UserContext } from "../../providers/user.Context";
import Cardplayers from "../CardPlayers";
import Header from "../header";
import CardLeagues from "../CardLeagues";
import CardSeanson from "../CardSeanson";
import CardTeams from "../CardTeams";
import CardTeam from "../CardTeam";
import CardLineups from "../Cardlineups";

function Main() {
  const {
    isLoged,
    showPlayer,
    showCountries,
    showLeagues,
    showTeams,
    showSeasion,
    showTeam,
    showScore,
  } = useContext(UserContext);

  return (
    <>
      <MainStayled>
        <DivStayled>
          {isLoged === true ? null : <CardLogin />}
          {showCountries === true ? <CardSelect /> : null}
          {showSeasion === true ? <CardSeanson /> : null}
          {showLeagues === true ? <CardLeagues /> : null}
          {showTeams === true ? <CardTeams /> : null}
          {showTeam === true ? <CardTeam /> : null}
        </DivStayled>
        <section className="section">
          {showPlayer === true ? <Cardplayers /> : null}
          {showScore === true ? <CardLineups /> : null}
        </section>
      </MainStayled>
    </>
  );
}

export default Main;
