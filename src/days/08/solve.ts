import { Grid, Position } from '../../types/grid.js';
import { AddAntinodeFunction, AntennaGroups } from './types.js';

const addAntinodes = (grid: Grid, antennas: Position[], antinodes: Position[], addAntinode: AddAntinodeFunction) => {
  for (const i in antennas) {
    const antenna = antennas[i];
    const otherAntennas = antennas.filter((_, index) => index !== +i);

    for (const otherAntenna of otherAntennas) {
      addAntinode(grid, antenna, otherAntenna, antinodes);
    }
  }
};

const solve = (grid: Grid, antennaGroups: AntennaGroups, addAntinode: AddAntinodeFunction) => {
  const antinodes: Position[] = [];
  for (const [_, antennas] of antennaGroups) {
    addAntinodes(grid, antennas, antinodes, addAntinode);
  }

  return antinodes.length;
};

export default solve;
