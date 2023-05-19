import React from "react";
import { useContext, useEffect, ChangeEvent } from "react";
import { UserContext } from "../../providers/user.Context";
import { CardStyled, ButtonStyled } from "../../styles/card";
import { iCountrie } from "../../interfaces";
function CardSelect() {
  const { setCounty, countries, country, GetCountries, Getleague } =
    useContext(UserContext);
  useEffect(() => {
    GetCountries();
  }, []);

  const HandleText = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log("este é o valor:", event.target.value);
    setCounty(event.target.value);
  };
  /* 
  const HandleTextLeague = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log("este é o valor:", event.target.value);
    setTextLeague(event.target.value);
  };

  const HandleTextSeanson = (event: ChangeEvent<HTMLSelectElement>) => {
    setYear(event.target.value);
  };

  const HandleTextTeam = (event: ChangeEvent<HTMLSelectElement>) => {
    setIdTeam(event.target.value);
    localStorage.setItem("nameTeam", event.target.value);
  };
 */
  return (
    <>
      {countries ? (
        <>
          <CardStyled>
            <label htmlFor="list">
              Selecione um País
              <select id="list" value={country?.name} onChange={HandleText}>
                <option selected={true}>Selecionar</option>
                {countries.map((country: iCountrie, index) => (
                  <option key={index} value={country.name}>
                    {country.name} | {country.code}
                  </option>
                ))}
              </select>
            </label>
          </CardStyled>
          <ButtonStyled onClick={() => Getleague()}>Ver Ligas</ButtonStyled>
        </>
      ) : (
        <>""</>
      )}
      {/* {leagues ? (
        <>
          <CardCountyStyled>
            <label htmlFor="league">
              Avançar
              <select
                id="league"
                value={league?.name}
                onChange={HandleTextLeague}
              >
                <option selected={true}>Selecionar</option>
                {leagues.map((league) => (
                  <option value={league.league.name}>
                    <p>{league.league.name}</p>
                  </option>
                ))}
              </select>
            </label>
          </CardCountyStyled>
          <ButtonStyled onClick={() => GetSeanson()}>Avançar</ButtonStyled>
        </>
      ) : null}
      {seanson ? (
        <>
          <CardCountyStyled>
            <label htmlFor="seasons">
              Temporadas
              <select id="seasons" value={year} onChange={HandleTextSeanson}>
                <option selected={true}>Selecionar</option>
                {seanson.map((data) => (
                  <option>{data.year}</option>
                ))}
              </select>
            </label>
          </CardCountyStyled>
          <ButtonStyled onClick={GetTeams}>Avançar</ButtonStyled>
        </>
      ) : null}
      {teams ? (
        <>
          <CardCountyStyled>
            <label htmlFor="team">
              Times
              <select id="team" value={team?.name} onChange={HandleTextTeam}>
                <option selected={true}>Selecionar</option>
                {teams.map((team) => (
                  <option value={team.team.name}>{team.team.name}</option>
                ))}
              </select>
            </label>
          </CardCountyStyled>
          <ButtonStyled onClick={() => GetTeam()}>Avançar</ButtonStyled>
        </>
      ) : null}
      {team ? (
        <>
          <CardCountyStyled>
            <figure>
              <LogoStyled src={team.logo} />
            </figure>
            <caption>{team.name}</caption>
          </CardCountyStyled>
          <button onClick={() => getPlayes()}>ver jogadores</button>
        </>
      ) : null}
      {showTable ? <Cardplayers children={null} /> : null} */}
    </>
  );
}

export default CardSelect;
