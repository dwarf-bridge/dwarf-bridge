export interface World {
  name: string;
  online_players: string;
  location: string;
  pvp_type: string;
  battle_eye: string | undefined;
  aditional_information: string;
}

export interface WorldList {
  regular_worlds: World[];
  tournament_worlds: World[];
}
