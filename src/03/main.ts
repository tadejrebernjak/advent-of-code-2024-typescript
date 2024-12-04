import { Answer, Input } from '../baseTypes.js';
import solvePart1 from './part1.js';
import solvePart2 from './part2.js';

const parseInput = (input: Input) => {
  return input.join('\n');
};

const main = (input: Input): Answer => {
  const instructions = parseInput(input);

  const part1 = solvePart1(instructions);
  const part2 = solvePart2(instructions);

  return {
    part1,
    part2,
  };
};

export default main;
