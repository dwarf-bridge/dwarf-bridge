import {
  BattleEyeStatus,
  PvPType,
  ServerCondition,
  ServerLocation,
  BaseRow,
} from '../core.interface';

export interface GameWorldRow extends BaseRow {
  name: string;
  location: ServerLocation | null;
  pvp_type: PvPType | null;
  battle_eye: BattleEyeStatus;
  server_conditions: ServerCondition[];
}

export interface World {
  name: string;
  online_players: number;
  location: ServerLocation | null;
  pvp_type: PvPType | null;
  battle_eye: BattleEyeStatus;
  server_conditions: ServerCondition[];
  was_online: boolean;
}

export interface WorldList {
  regular_worlds: World[];
  tournament_worlds: World[];
}

export interface GameWorldEntry {
  name: string;
  location: ServerLocation;
  pvp_type: PvPType;
  battle_eye: BattleEyeStatus;
  server_conditions: ServerCondition[];
  merged_into: string | null;
  merged_at: Date | null;
  server_titles: string[];
  is_special_world: boolean;
}
