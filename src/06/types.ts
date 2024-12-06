export type Grid = string[][];

export type Direction = 0 | 1 | 2 | 3;

export interface Position {
  x: number;
  y: number;
  direction: Direction;
}
