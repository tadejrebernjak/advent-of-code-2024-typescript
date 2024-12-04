import { Answer, Input } from '../baseTypes.js';
import solvePart1 from './part1.js';
import solvePart2 from './part2.js';
import { Grid } from './types.js';

const parseInput = (lines: Input): Grid => {
  const output = [];

  for (const line of lines) {
    output.push(line.split(''));
  }

  return output;
};

const main = (lines: Input): Answer => {
  const grid = parseInput(lines);

  const part1 = solvePart1(grid);
  const part2 = solvePart2(grid);

  return {
    part1,
    part2,
  };
};

export default main;
