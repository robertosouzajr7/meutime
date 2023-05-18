import React from "react";
import { CardCountyStyled, CardSelectStyled } from "./styles";
import Button from "../Button/index";
import {
  iChildren,
  iCountrie,
  iLeague,
  iLeagues,
  iSeasons,
  iTeam,
  iTeams,
} from "../../interfaces";
import { useContext, useEffect, useState, ChangeEvent } from "react";
import { UserContext } from "../../providers/user.Context";
import { Api, Options } from "../../services/api";
import { InputStyled } from "../CardLogin/styles";
import { ButtonStyled } from "../Button/styles";
function CardSelect(children: iChildren) {
  const { countries, HandleLogin, setCountries } = useContext(UserContext);
  const [county, setCounty] = useState<string>("");
  const [textLeague, setTextLeague] = useState<string>("");
  const [country, setCountry] = useState<iCountrie>();
  const [leagues, setLeagues] = useState<iLeagues[]>([]);
  const [league, setLeague] = useState<iLeague>();
  const [seanson, setSeansons] = useState<iSeasons[] | undefined>([]);
  const [year, setYear] = useState<number>();
  const [team, setTeam] = useState<iTeam>();
  const [teams, setTeams] = useState<iTeams[]>([]);

  const GetCountries = async () => {
    await Api.get(`/countries`, Options)
      .then((res) => {
        setCountries(res.data.response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const Getleague = async () => {
    await Api.get(`/leagues?country=${county}`, Options)
      .then((res) => {
        setLeagues(res.data.response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const GetSeanson = () => {
    const getSeanson = leagues.find((ele) => ele.league.name === textLeague);
    localStorage.setItem("seansonId", textLeague);
    setSeansons(getSeanson?.seasons);
  };

  const GetTeams = async () => {
    const params = `?league=${league?.id}&season=${textLeague}&country=${country?.name}`;
    await Api.get(`/teams/${params}`, Options)
      .then((response) => {
        setTeam(response.data.team);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    GetCountries();
  }, []);

  const HandleText = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log("este é o valor:", event.target.value);
    setCounty(event.target.value);
  };

  const HandleTextLeague = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log("este é o valor:", event.target.value);
    setTextLeague(event.target.value);
  };

  const HandleTextSeanson = (event: ChangeEvent<HTMLSelectElement>) => {
    setYear(event.target.value);
  };

  console.log(county, country, leagues, team?.code);
  return (
    <>
      <h4>Selecione um País</h4>
      {countries ? (
        <>
          <CardSelectStyled>
            <label htmlFor="list">
              <select id="list" value={country?.name} onChange={HandleText}>
                {countries.map((country: iCountrie, index) => (
                  <option key={index} value={country.name}>
                    {country.name} | {country.code}
                  </option>
                ))}
              </select>
            </label>
          </CardSelectStyled>
          <ButtonStyled onClick={() => Getleague()}>Ver Ligas</ButtonStyled>
        </>
      ) : null}
      {leagues ? (
        <>
          <CardCountyStyled>
            <label htmlFor="league">
              Avançar
              <select
                id="league"
                value={league?.name}
                onChange={HandleTextLeague}
              >
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
            <label htmlFor="seasons">Temporadas</label>
            <select id="seasons" value={year} onChange={HandleTextSeanson}>
              {seanson.map((data) => (
                <option>{data.year}</option>
              ))}
            </select>
          </CardCountyStyled>
          <ButtonStyled onClick={GetTeams}>Avançar</ButtonStyled>
        </>
      ) : null}
    </>
  );
}

export default CardSelect;
