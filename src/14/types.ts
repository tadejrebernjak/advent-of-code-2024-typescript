export interface Grid {
  width: number;
  height: number;
}

export interface Coordinates {
  x: number;
  y: number;
}

export interface Robot {
  position: Coordinates;
  velocity: Coordinates;
}
