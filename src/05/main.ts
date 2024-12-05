import { Answer, Input } from '../baseTypes.js';
import solvePart1 from './part1.js';
import solvePart2 from './part2.js';

const addConstraint = (line: string, constraints: number[][]) => {
  const [requiredNumber, index] = line.split('|').map((str) => parseInt(str));
  constraints[index].push(requiredNumber);
};

const addUpdate = (line: string, updates: number[][]) => {
  const numbers = line.split(',').map((str) => parseInt(str));
  updates.push(numbers);
};

const parseInput = (input: Input) => {
  const constraints: number[][] = Array(100)
    .fill(null)
    .map(() => []);
  const updates: number[][] = [];

  let readingConstraints = true;

  input.forEach((line) => {
    if (line === '\r') {
      readingConstraints = false;
      return;
    }

    if (readingConstraints) {
      addConstraint(line, constraints);
      return;
    }

    addUpdate(line, updates);
  });

  return { constraints, updates };
};

const main = (input: Input): Answer => {
  const { constraints, updates } = parseInput(input);

  const incorrectUpdates = [];

  const part1 = solvePart1(updates, incorrectUpdates, constraints);
  const part2 = solvePart2(incorrectUpdates, constraints);

  return {
    part1,
    part2,
  };
};

export default main;
