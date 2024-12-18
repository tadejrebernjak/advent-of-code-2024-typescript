import { Answer, Input } from '../../types/base.js';
import solvePart1 from './part1.js';
import solvePart2 from './part2.js';
import { Equation } from './types.js';

const parseInput = (input: Input) => {
  const equations: Equation[] = [];
  for (const line of input) {
    const [resultString, numberStrings] = line.split(': ');

    const expectedResult = +resultString;
    const numbers = numberStrings.split(' ').map((str) => +str);

    equations.push({ expectedResult, numbers });
  }

  return equations;
};

const main = (input: Input): Answer => {
  const equations: Equation[] = parseInput(input);

  const part1 = solvePart1(equations);
  const part2 = solvePart2(equations);

  return {
    part1,
    part2,
  };
};

export default main;
