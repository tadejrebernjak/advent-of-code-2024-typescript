import { Movement, Position } from '../../types/grid.js';

export interface Button extends Movement {
  cost: number;
}

export interface ClawMachine {
  buttonA: Button;
  buttonB: Button;
  prize: Position;
}
