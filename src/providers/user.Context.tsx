import React, { createContext, useEffect, useState } from "react";
import {
  iChildren,
  iCountrie,
  iLeague,
  iLeagues,
  iSeasons,
  iSquad,
  iStatistc,
  iTeam,
  iTeams,
} from "../interfaces";
import { Api, Params } from "../services/api";
import { Options } from "../services/api";
export interface iUserContext {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  HandleLogin: () => void;
  isLoged: boolean;
  setIsged: React.Dispatch<React.SetStateAction<boolean>>;
  countries: iCountrie[];
  setCountries: React.Dispatch<React.SetStateAction<iCountrie[]>>;
  showTable: boolean;
  setShowTable: React.Dispatch<React.SetStateAction<boolean>>;
  team: iTeam;
  setTeam: React.Dispatch<React.SetStateAction<iTeam>>;
  getPlayes: () => void;
  squad: iSquad[];
  setSquad: React.Dispatch<React.SetStateAction<iSquad[]>>;
  Getleague: () => void;
  leagues: iLeagues[];
  setLeagues: React.Dispatch<React.SetStateAction<iLeagues[]>>;
  country: iCountrie;
  setCountry: React.Dispatch<React.SetStateAction<iCountrie>>;
  league: iLeague;
  setLeague: React.Dispatch<React.SetStateAction<iLeague>>;
  GetCountries: () => void;
  seanson: iSeasons[];
  setSeansons: React.Dispatch<React.SetStateAction<iSeasons[]>>;
  GetSeanson: () => void;
  GetTeams: () => void;
  idTeam: number | string;
  setIdTeam: React.Dispatch<React.SetStateAction<number | string>>;
  teams: iTeams[];
  setTeams: React.Dispatch<React.SetStateAction<iTeams[]>>;
  GetTeam: () => void;
  county: string;
  setCounty: React.Dispatch<React.SetStateAction<string>>;
  showLeagues: boolean;
  setTextLeague: React.Dispatch<React.SetStateAction<string>>;
  showCountries: boolean;
  year: number | string | undefined;
  setYear: React.Dispatch<React.SetStateAction<number | string | undefined>>;
  showSeasion: boolean;
  setShowSeasion: React.Dispatch<React.SetStateAction<boolean>>;
  showTeams: boolean;
  setShowTeams: React.Dispatch<React.SetStateAction<boolean>>;
  showTeam: boolean;
  setShowTeam: React.Dispatch<React.SetStateAction<boolean>>;
  showPlayer: boolean;
  setShowPlayer: React.Dispatch<React.SetStateAction<boolean>>;
  showScore: boolean;
  setShowScore: React.Dispatch<React.SetStateAction<boolean>>;
  GetStatistcs: () => void;
  statistics: iStatistc;
  setStatistics: React.Dispatch<React.SetStateAction<iStatistc>>;
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

export const UserProvider = ({ children }: iChildren) => {
  const [token, setToken] = useState<string>("");
  const [isLoged, setIsged] = useState<boolean>(false);
  const [showTable, setShowTable] = useState<boolean>(false);
  const [countries, setCountries] = useState<iCountrie[]>([]);
  const [team, setTeam] = useState<iTeam>({} as iTeam);
  const [squad, setSquad] = useState<iSquad[]>([]);
  const [leagues, setLeagues] = useState<iLeagues[]>([]);
  const [country, setCountry] = useState<iCountrie>({} as iCountrie);
  const [county, setCounty] = useState<string>("");
  const [league, setLeague] = useState<iLeague>({} as iLeague);
  const [seanson, setSeansons] = useState<iSeasons[]>([]);
  const [textLeague, setTextLeague] = useState<string>("");
  const [year, setYear] = useState<number | string | undefined>();
  const [idTeam, setIdTeam] = useState<number | string>("");
  const [teams, setTeams] = useState<iTeams[]>([]);
  const [showLeagues, setShowLeagues] = useState<boolean>(false);
  const [showCountries, setShowCountries] = useState<boolean>(false);
  const [showSeasion, setShowSeasion] = useState<boolean>(false);
  const [showTeams, setShowTeams] = useState<boolean>(false);
  const [showTeam, setShowTeam] = useState<boolean>(false);
  const [showPlayer, setShowPlayer] = useState<boolean>(false);
  const [showScore, setShowScore] = useState<boolean>(false);
  const [statistics, setStatistics] = useState<iStatistc>({} as iStatistc);

  const HandleLogin = async () => {
    await Api.get(`/countries`, Options)
      .then((res) => {
        setIsged(true);
        setShowCountries(true);
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
        setShowCountries(false);
        setShowLeagues(true);
        setIsged(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const GetCountries = async () => {
    await Api.get(`/countries`, Options)
      .then((res) => {
        setCountries(res.data.response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const GetSeanson = () => {
    const getSeanson: any = leagues.find(
      (ele) => ele.league.name === textLeague
    );
    setShowLeagues(false);
    setShowSeasion(true);
    localStorage.setItem("seansonId", textLeague);
    localStorage.setItem("leagueId", getSeanson.league.id);
    localStorage.setItem("countryName", getSeanson.country.name);
    setSeansons(getSeanson?.seasons);
  };

  const GetTeams = async () => {
    const params = `?league=${localStorage.getItem(
      "leagueId"
    )}&season=${year}&country=${localStorage.getItem("countryName")}`;
    console.log(params);
    await Api.get(`/teams/${params}`, Options)
      .then((response) => {
        setShowSeasion(false);
        setShowTeams(true);
        setTeams(response.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const GetTeam = () => {
    const nameTeam = localStorage.getItem("nameTeam");
    const getTeam = teams.find((team) => team.team.name === nameTeam);
    setTeam(getTeam!.team);
    localStorage.setItem("idTeam", String(getTeam?.team.id));
    setShowTeam(true);
    setShowTeams(false);
  };

  const getPlayes = async () => {
    const params = localStorage.getItem("idTeam");
    await Api.get(`/players/squads?team=${params}`, Options)
      .then((response) => {
        setSquad(response.data.response);
        setShowPlayer(true);
      })
      .catch((err) => console.error(err));
  };

  const GetStatistcs = async () => {
    const { league, season, team } = Params;
    await Api.get(
      `/teams/statistics?season=${season}&team=${team}&league=${league}`,
      Options
    )
      .then((response) => {
        setShowPlayer(false);
        setStatistics(response.data.response);
      })
      .catch((err) => console.error(err));
  };

  return (
    <UserContext.Provider
      value={{
        HandleLogin,
        token,
        setToken,
        isLoged,
        setIsged,
        countries,
        setCountries,
        showTable,
        setShowTable,
        team,
        setTeam,
        squad,
        setSquad,
        getPlayes,
        Getleague,
        leagues,
        setLeagues,
        country,
        setCountry,
        league,
        setLeague,
        GetCountries,
        seanson,
        setSeansons,
        GetSeanson,
        GetTeams,
        idTeam,
        setIdTeam,
        teams,
        setTeams,
        GetTeam,
        setCounty,
        county,
        showLeagues,
        setTextLeague,
        showCountries,
        year,
        setYear,
        showSeasion,
        setShowSeasion,
        showTeams,
        setShowTeams,
        showTeam,
        setShowTeam,
        setShowPlayer,
        showPlayer,
        showScore,
        setShowScore,
        GetStatistcs,
        statistics,
        setStatistics,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
