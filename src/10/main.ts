import { Answer, Input } from '../baseTypes.js';
import solvePart1 from './part1.js';
import solvePart2 from './part2.js';
import { Grid } from './types.js';
import { findTrailheads } from './utils.js';

const parseInput = (input: Input) => {
  const grid: Grid = [];

  for (const line of input) {
    const numbers = line.split('').map((str) => parseInt(str));
    grid.push(numbers);
  }

  return grid;
};

const main = (input: Input): Answer => {
  const grid = parseInput(input);
  const trailheads = findTrailheads(grid);

  const part1 = solvePart1(trailheads);
  const part2 = solvePart2(trailheads);

  return {
    part1,
    part2,
  };
};

export default main;
