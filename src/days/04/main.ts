import { Answer, Input } from '../../types/base.js';
import { Grid } from '../../types/grid.js';
import solvePart1 from './part1.js';
import solvePart2 from './part2.js';

const parseInput = (input: Input): Grid => {
  const output = [];

  for (const line of input) {
    output.push(line.split(''));
  }

  return output;
};

const main = (input: Input): Answer => {
  const grid = parseInput(input);

  const part1 = solvePart1(grid);
  const part2 = solvePart2(grid);

  return {
    part1,
    part2,
  };
};

export default main;
