export type Grid = number[][];

export type Direction = 'up' | 'right' | 'down' | 'left';

export type DesiredResult = 'score' | 'rating';

export interface Position {
  x: number;
  y: number;
}

export interface Trailhead {
  score: number;
  rating: number;
}
