export type Grid = string[][];

export interface Position {
  x: number;
  y: number;
}

export type AntennaGroups = Map<string, Position[]>;
