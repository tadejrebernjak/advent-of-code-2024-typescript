import { Answer, Input } from '../../types/base.js';
import { NumberGrid } from '../../types/grid.js';
import solvePart1 from './part1.js';
import solvePart2 from './part2.js';
import findTrailheads from './solve.js';

const parseInput = (input: Input): NumberGrid => {
  const grid = [];

  for (const line of input) {
    const numbers = line.split('').map((str) => +str);
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
