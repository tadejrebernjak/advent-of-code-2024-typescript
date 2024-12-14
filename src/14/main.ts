import { Answer, Input } from '../baseTypes.js';
import solvePart1 from './part1.js';
import solvePart2 from './part2.js';
import { Robot } from './types.js';

const parseInput = (input: Input) => {
  const robots = [];

  for (const line of input) {
    const [left, right] = line.split(' ');
    const [xPos, yPos] = left.split('=').pop().split(',');
    const [xVel, yVel] = right.split('=').pop().split(',');

    const position = {
      x: +xPos,
      y: +yPos,
    };

    const velocity = {
      x: +xVel,
      y: +yVel,
    };

    robots.push({ position, velocity });
  }

  return robots;
};

const main = (input: Input): Answer => {
  const robots: Robot[] = parseInput(input);
  const grid = { width: 101, height: 103 };

  const part1 = solvePart1(grid, robots, 100);
  const part2 = solvePart2(grid, robots);

  return {
    part1,
    part2,
  };
};

export default main;
