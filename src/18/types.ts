export interface Position {
  x: number;
  y: number;
}

export interface Node {
  position: Position;
  cost: number;
  direction: Direction;
}

export type Grid = string[][];

export type Direction = '^' | '>' | 'v' | '<';
