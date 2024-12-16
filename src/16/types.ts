export type Grid = string[][];

export type Direction = '^' | '>' | 'v' | '<';

export type Turn = 0 | -1 | 1 | 2;

export interface Position {
  x: number;
  y: number;
}

export interface Node {
  position: Position;
  cost: number;
  direction: Direction;
}
