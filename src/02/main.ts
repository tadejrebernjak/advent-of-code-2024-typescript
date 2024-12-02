import { Answer, Input } from '../baseTypes.js';
import solvePart1 from './part1.js';
import solvePart2 from './part2.js';

const parseInput = (lines: Input) => {
  const reports: number[][] = [];

  lines.forEach((line) => {
    const levels = line.split(' ');

    const levelsNumbers = levels.map((levelString) => parseInt(levelString));

    reports.push(levelsNumbers);
  });

  return reports;
};

const main = (lines: Input): Answer => {
  const reports = parseInput(lines);

  const part1 = solvePart1(reports);
  const part2 = solvePart2(reports);

  return {
    part1,
    part2,
  };
};

export default main;
