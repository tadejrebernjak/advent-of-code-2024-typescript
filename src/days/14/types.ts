import { Movement, Position } from '../../types/grid.js';

export interface Dimension {
  width: number;
  height: number;
}

export interface Robot {
  position: Position;
  velocity: Movement;
}
