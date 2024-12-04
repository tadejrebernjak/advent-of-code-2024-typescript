export type Grid = string[][];

export type Direction = 'up' | 'up_right' | 'right' | 'down_right' | 'down' | 'down_left' | 'left' | 'up_left';

export interface Position {
  x: number;
  y: number;
}
