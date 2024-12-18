import { Answer, Input } from '../../types/base.js';
import solvePart1 from './part1.js';
import solvePart2 from './part2.js';
import { AntennaGroups } from './types.js';

const addAntennas = (antennaGroups: AntennaGroups, row: string[], y: number) => {
  for (const [x, char] of row.entries()) {
    if (char == '.') {
      continue;
    }

    const position = { x, y };

    if (antennaGroups.has(char)) {
      antennaGroups.get(char).push(position);
      continue;
    }

    antennaGroups.set(char, [position]);
  }
};

const parseInput = (input: Input) => {
  const grid = [];
  const antennaGroups = new Map();

  for (const [y, line] of input.entries()) {
    const row = line.split('');
    grid.push(row);

    addAntennas(antennaGroups, row, y);
  }

  return { grid, antennaGroups };
};

const main = (input: Input): Answer => {
  const { grid, antennaGroups } = parseInput(input);

  const part1 = solvePart1(grid, antennaGroups);
  const part2 = solvePart2(grid, antennaGroups);

  return {
    part1,
    part2,
  };
};

export default main;
