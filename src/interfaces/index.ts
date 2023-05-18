import { ReactNode } from "react";

export interface iChildren {
  children: ReactNode;
}

export interface iCountrie {
  name: string;
  flag: string;
  code: string;
}

export interface iLeague {
  id: number;
  name: string;
  type: string;
  logo: string;
}

export interface iSeasons {
  year?: number;
  start?: string;
  end?: string;
  current?: boolean;
  coverage?: {
    fixtures: {
      events: boolean;
      lineaups: boolean;
      statistics_fixtures: boolean;
      statistics_players: boolean;
    };
    standings: boolean;
    players: boolean;
    top_scorers: boolean;
    top_assists: boolean;
    top_cards: boolean;
    injuries: boolean;
    predictions: boolean;
    odds: boolean;
  };
}

export interface iLeagues {
  league: iLeague;
  country: iCountrie;
  seasons: iSeasons[];
}

export interface iTeam {
  id: number;
  name: string;
  code: string;
  country: string;
  founded: number;
  national: boolean;
  logo: string;
}

export interface iVenue {
  id: number;
  name: string;
  address: string;
  city: string;
  capacity: number;
  surface: string;
  image: string;
}

export interface iTeams {
  team: iTeam;
  venue: iVenue;
}
