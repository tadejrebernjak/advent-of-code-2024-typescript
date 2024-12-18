import { DirectionCardinal, Position } from './grid.js';

export interface NodeDijkstra {
  position: Position;
  cost: number;
  direction: DirectionCardinal;
}
