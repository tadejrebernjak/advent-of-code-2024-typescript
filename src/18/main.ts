import { Answer, Input } from '../baseTypes.js';
import solvePart1 from './part1.js';
import { Position } from './types.js';

const parseInput = (input: Input) => {
  const obstacles = input.map((line) => {
    const [left, right] = line.split(',');
    return { x: +left, y: +right };
  });
  return obstacles;
};

const main = (input: Input): Answer => {
  const obstacles: Position[] = parseInput(input);

  const part1 = solvePart1(obstacles, 1024);

  return {
    part1,
    part2: 0,
  };
};

export default main;
