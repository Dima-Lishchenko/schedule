export interface IMatch {
  id: string;
  name: string;
  competitionId: string;
  competition: string;
  countryId: string;
  country: string;
  timestamp: number;
  date: string;
  time: string;
  status: IStatus;
  round?: IRound;
  homeTeam: ITeam;
  awayTeam: ITeam;
  homeScore: IScore;
  awayScore: IScore;
  liveStatus: string;
}

interface IStatus {
  code: number;
  type: 'inprogress' | 'canceled' | 'notstarted' | 'finished';
}

interface IRound {
  round: number;
}

interface ITeam {
    id: number,
    name: string;
    slug: string;
    gender: string;
    subTeams: never[];
}

interface IScore {
  current?: number;
  period1?: number;
  normaltime?: number;
}
