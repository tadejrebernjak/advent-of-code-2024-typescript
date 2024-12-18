import { Position } from '../../types/grid.js';

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
