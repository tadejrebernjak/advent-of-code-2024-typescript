import { Answer, Input } from '../baseTypes.js';
import solvePart1 from './part1.js';
import solvePart2 from './part2.js';

const parseInput = (input: Input) => {
  const reports: number[][] = [];

  input.forEach((line) => {
    const levels = line.split(' ').map((levelString) => parseInt(levelString));
    reports.push(levels);
  });

  return reports;
};

const main = (input: Input): Answer => {
  const reports = parseInput(input);

  const part1 = solvePart1(reports);
  const part2 = solvePart2(reports);

  return {
    part1,
    part2,
  };
};

export default main;
