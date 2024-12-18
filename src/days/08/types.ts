import { Grid, Position } from '../../types/grid.js';

export type AntennaGroups = Map<string, Position[]>;

export type AddAntinodeFunction = (
  grid: Grid,
  currentAntenna: Position,
  otherAntenna: Position,
  antinodes: Position[],
) => void;
