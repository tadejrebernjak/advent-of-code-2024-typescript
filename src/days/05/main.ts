import { Answer, Input } from '../../types/base.js';
import solvePart1 from './part1.js';
import solvePart2 from './part2.js';

const addConstraint = (line: string, constraints: number[][]) => {
  const [requiredNumber, index] = line.split('|').map((str) => +str);
  constraints[index].push(requiredNumber);
};

const addUpdate = (line: string, updates: number[][]) => {
  const numbers = line.split(',').map((str) => +str);
  updates.push(numbers);
};

const parseInput = (input: Input) => {
  const constraints: number[][] = Array(100)
    .fill(null)
    .map(() => []);
  const updates: number[][] = [];

  let readingConstraints = true;
  for (const line of input) {
    if (!line) {
      readingConstraints = false;
      continue;
    }

    if (readingConstraints) {
      addConstraint(line, constraints);
      continue;
    }

    addUpdate(line, updates);
  }

  return { constraints, updates };
};

const main = (input: Input): Answer => {
  const { constraints, updates } = parseInput(input);

  const { sum: part1, incorrectUpdates } = solvePart1(updates, constraints);
  const part2 = solvePart2(incorrectUpdates, constraints);

  return {
    part1,
    part2,
  };
};

export default main;
