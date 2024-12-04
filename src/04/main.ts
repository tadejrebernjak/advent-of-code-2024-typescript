import { Answer, Input } from '../baseTypes.js';
import solvePart1 from './part1.js';
import solvePart2 from './part2.js';

const parseInput = (lines: Input) => {
  const output = [];

  for (const line of lines) {
    output.push(line.split(''));
  }

  return output;
};

const main = (lines: Input): Answer => {
  const inputMatrix = parseInput(lines);

  const part1 = solvePart1(inputMatrix);
  const part2 = solvePart2(inputMatrix);

  return {
    part1,
    part2,
  };
};

export default main;
