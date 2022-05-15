export interface IPosition {
  name: string;
  colourLogo: string;
  blackLogo: string;
}

export interface IBatterProps {
  batter_stat: {
    _1B: number;
    _2B: number;
    _3B: number;
    _AB: number;
    _AVG: number;
    _BB: number;
    _CS: number;
    _E: number;
    _G: number;
    _GDP: number;
    _H: number;
    _HBP: number;
    _HR: number;
    _IBB: number;
    _OBP: number;
    _PA: number;
    _R: number;
    _RBI: number;
    _SB: number;
    _SF: number;
    _SH: number;
    _SLG: number;
    _SO: number;
    _TB: number;
  };
  player_info: {
    backNumber: string;
    batInfo: string;
    birth: string;
    height: number;
    weight: number;
    name: string;
    position: string;
    team: string;
  };
}

export interface IPlayer {
  age: number;
  backNumber: number;
  batInfo: string;
  pitchInfo: string;
  birth: string;
  height: string;
  weight: string;
  highSchool: string;
  position: string;
  salary: string;
  name: string;
  team: string;
}

export interface IButton {
  prev: string;
  next: string;
}

export interface ITeam {
  company: string;
  name: string;
  colourLogo: string;
  blackLogo: string;
  teamColour: string;
  foundedAt: number;
  champCount: number;
  lastSeason: number;
}

export interface TeamResponse {
  teamDTOList: Array<ITeam>;
}
