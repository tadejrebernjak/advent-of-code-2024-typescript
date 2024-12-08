import { AntennaGroups, Grid, Position } from './types.js';
import { antinodeExists, outOfBounds } from './utils.js';

const addAntinode = (grid: Grid, currentAntenna: Position, otherAntenna: Position, antinodes: Position[]) => {
  const xOffset = currentAntenna.x - otherAntenna.x;
  const yOffset = currentAntenna.y - otherAntenna.y;

  for (let i = 0; true; i++) {
    const newPosition = {
      x: currentAntenna.x - xOffset * i,
      y: currentAntenna.y - yOffset * i,
    };

    if (outOfBounds(grid, newPosition)) {
      return;
    }

    if (antinodeExists(newPosition, antinodes)) {
      continue;
    }

    antinodes.push(newPosition);
  }
};

const addAntinodes = (grid: Grid, antennas: Position[], antinodes: Position[]) => {
  for (let i = 0; i < antennas.length; i++) {
    const antenna = antennas[i];
    const otherAntennas = antennas.filter((_, index) => index !== i);

    for (const otherAntenna of otherAntennas) {
      addAntinode(grid, antenna, otherAntenna, antinodes);
    }
  }
};

const solvePart2 = (grid: Grid, antennaGroups: AntennaGroups) => {
  const antinodes: Position[] = [];

  for (const [_, value] of antennaGroups) {
    addAntinodes(grid, value, antinodes);
  }

  return antinodes.length;
};

export default solvePart2;
