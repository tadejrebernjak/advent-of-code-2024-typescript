export interface Coordinates {
  x: number;
  y: number;
}

export interface Button extends Coordinates {
  cost: number;
}

export interface ClawMachine {
  buttonA: Button;
  buttonB: Button;
  prize: Coordinates;
}
