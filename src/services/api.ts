import axios from "axios";

const token = localStorage.getItem("token");

export const Api = axios.create({
  baseURL: "https://api-football-v1.p.rapidapi.com/v3",
  timeout: 5000,
});

export const Options = {
  headers: {
    "X-RapidAPI-Key": `${token}`,
    "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
  },
};

export const Params = {
  league: Number(localStorage.getItem("leagueId")),
  team: Number(localStorage.getItem("idTeam")),
  season: Number(localStorage.getItem("idSeanson")),
  search: "",
  page: 1,
};
