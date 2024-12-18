import { Answer, Input } from '../../types/base.js';
import { Position } from '../../types/grid.js';
import solvePart1 from './part1.js';
import solvePart2 from './part2.js';

const parseInput = (input: Input) => {
  const bytes = input.map((line) => {
    const [left, right] = line.split(',');
    return { x: +left, y: +right };
  });

  return bytes;
};

const main = (input: Input): Answer => {
  const bytes: Position[] = parseInput(input);

  const part1 = solvePart1(bytes, 1024);
  const part2 = solvePart2(bytes);

  return {
    part1,
    part2,
  };
};

export default main;
