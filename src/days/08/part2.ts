import { Grid, Position } from '../../types/grid.js';
import { isInBounds, positionsInclude } from '../../utils/grid.js';
import solve from './solve.js';
import { AntennaGroups } from './types.js';

const addAntinode = (grid: Grid, currentAntenna: Position, otherAntenna: Position, antinodes: Position[]) => {
  const xOffset = currentAntenna.x - otherAntenna.x;
  const yOffset = currentAntenna.y - otherAntenna.y;

  for (let i = 0; true; i++) {
    const newPosition = {
      x: currentAntenna.x - xOffset * i,
      y: currentAntenna.y - yOffset * i,
    };

    if (!isInBounds(grid, newPosition)) {
      return;
    }

    if (positionsInclude(antinodes, newPosition)) {
      continue;
    }

    antinodes.push(newPosition);
  }
};

const solvePart2 = (grid: Grid, antennaGroups: AntennaGroups) => {
  return solve(grid, antennaGroups, addAntinode);
};

export default solvePart2;