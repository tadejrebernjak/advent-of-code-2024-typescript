import { Answer, Input } from '../baseTypes.js';
import solvePart1 from './part1.js';
import solvePart2 from './part2.js';

const parseInput = (input: Input) => {
  const stonesStrings = input.join('').split(' ');
  return stonesStrings.map((str) => parseInt(str));
};

const main = (input: Input): Answer => {
  const stones = parseInput(input);

  const part1 = solvePart1(stones, 25);
  const part2 = solvePart2(stones, 75);

  return {
    part1,
    part2,
  };
};

export default main;
