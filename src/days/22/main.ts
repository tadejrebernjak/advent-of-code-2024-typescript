import { Answer, Input } from '../../types/base.js';
import solvePart1 from './part1.js';

const parseInput = (input: Input) => {
  return input.map((line) => +line);
};

const main = (input: Input): Answer => {
  const initialSecrets = parseInput(input);

  const part1 = solvePart1(initialSecrets, 2000);

  return {
    part1,
    part2: 0,
  };
};

export default main;
