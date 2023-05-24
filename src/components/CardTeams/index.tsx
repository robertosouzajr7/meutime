import React from "react";
import { useContext, useEffect, ChangeEvent } from "react";
import { UserContext } from "../../providers/user.Context";
import { CardStyled, ButtonStyled } from "../../styles/card";

function CardTeams() {
  const { GetCountries, teams, team, GetTeam, setIdTeam } =
    useContext(UserContext);
  useEffect(() => {
    GetCountries();
  }, []);

  const HandleTextTeam = (event: ChangeEvent<HTMLSelectElement>) => {
    setIdTeam(event.target.value);
    localStorage.setItem("nameTeam", event.target.value);
  };

  return (
    <>
      {teams ? (
        <>
          <CardStyled>
            <label htmlFor="team">
              Times
              <select id="team" value={team?.name} onChange={HandleTextTeam}>
                <option selected={true}>Selecionar</option>
                {teams.map((team) => (
                  <option value={team.team.name}>{team.team.name}</option>
                ))}
              </select>
            </label>
          </CardStyled>
          <ButtonStyled onClick={() => GetTeam()}>Avançar</ButtonStyled>
        </>
      ) : null}
    </>
  );
}

export default CardTeams;
