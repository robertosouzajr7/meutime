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

export interface iLeague {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: string;
}

export interface iFixtures {
  draws: {
    home: number;
    away: number;
    total: number;
  };
  played: {
    home: number;
    away: number;
    total: number;
  };

  wins: {
    home: number;
    away: number;
    total: number;
  };
  loses: {
    home: number;
    away: number;
    total: number;
  };
}

export interface iStatistc {
  league: iLeague;
  team: iTeam;
  form?: {};
  fixtures: iFixtures;
  goals: {
    for: {
      total: {
        home: number;
        away: number;
        total: number;
      };
      average: {
        home: string;
        away: string;
        total: string;
      };

      minute: [
        { "0-15": { total: number; percentage: number } },
        {
          "16-30": {
            total: number;
            percentage: number;
          };
        },
        {
          "31-45": {
            total: number;
            percentage: number;
          };
        },
        {
          "46-60": {
            total: number;
            percentage: number;
          };
        },
        {
          "61-75": {
            total: number;
            percentage: number;
          };
        },
        {
          "76-90": {
            total: number;
            percentage: number;
          };
        },
        {
          "91-105": {
            total: number;
            percentage: number;
          };
        },
        {
          "106-120": {
            total: number;
            percentage: number;
          };
        }
      ];
    };
    against: {
      total: {
        home: number;
        away: number;
        total: number;
      };
      average: {
        home: string;
        away: string;
        total: string;
      };

      minute: {
        "0-15": {
          total: number;
          percentage: number;
        };
        "16-30": {
          total: number;
          percentage: number;
        };
        "31-45": {
          total: number;
          percentage: number;
        };
        "46-60": {
          total: number;
          percentage: number;
        };
        "61-75": {
          total: number;
          percentage: number;
        };
        "76-90": {
          total: number;
          percentage: number;
        };
        "91-105": {
          total: number;
          percentage: number;
        };
        "106-120": {
          total: number;
          percentage: number;
        };
      };
    };
  };
  biggest: {
    streak: {
      draws: number;
      loses: number;
      wins: number;
    };
    wins: {
      away: string;
      home: string;
    };
    loses: {
      away: string;
      home: string;
    };
    goals: {
      against: {
        away: number;
        home: number;
      };
      for: {
        away: number;
        home: number;
      };
    };
  };
  clean_sheet: {};
  failed_to_score: {};
  penalty: {};
  lineups: [];
  cards: {};
}

export interface iPlayers {
  id: number;
  name: string;
  age: number;
  position: string;
  photo: string;
}

export interface iSquad {
  team: iTeam;
  players: iPlayers[];
}
