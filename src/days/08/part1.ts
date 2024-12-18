import { Grid, Position } from '../../types/grid.js';
import { isInBounds, positionsInclude } from '../../utils/grid.js';
import solve from './solve.js';
import { AntennaGroups } from './types.js';

const addAntinode = (grid: Grid, currentAntenna: Position, otherAntenna: Position, antinodes: Position[]) => {
  const xOffset = currentAntenna.x - otherAntenna.x;
  const yOffset = currentAntenna.y - otherAntenna.y;

  const newPosition = {
    x: currentAntenna.x - xOffset * 2,
    y: currentAntenna.y - yOffset * 2,
  };

  if (!isInBounds(grid, newPosition) || positionsInclude(antinodes, newPosition)) {
    return;
  }

  antinodes.push(newPosition);
};

const solvePart1 = (grid: Grid, antennaGroups: AntennaGroups) => {
  return solve(grid, antennaGroups, addAntinode);
};

export default solvePart1;
