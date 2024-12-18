import { Answer, Input } from '../../types/base.js';
import findRegions from './findRegions.js';
import solvePart1 from './part1.js';
import solvePart2 from './part2.js';

const parseInput = (input: Input) => {
  return input.map((line) => line.split(''));
};

const main = (input: Input): Answer => {
  const grid = parseInput(input);
  const regions = findRegions(grid);

  const part1 = solvePart1(grid, regions);
  const part2 = solvePart2(grid, regions);

  return {
    part1,
    part2,
  };
};

export default main;
