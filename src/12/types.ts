export type Grid = string[][];

export type Direction = 'up' | 'right' | 'down' | 'left';

export interface Position {
  x: number;
  y: number;
}

export interface Region {
  type: string;
  plots: Position[];
}

export interface Edge extends Position {
  from: number;
}

export interface UniqueEdge {
  axis: keyof Position;
  from: number;
  value: number;
}
