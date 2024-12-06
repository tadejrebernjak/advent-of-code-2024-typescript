import { Answer, Input } from '../baseTypes.js';
import solvePart1 from './part1.js';
import solvePart2 from './part2.js';
import { Grid, Position } from './types.js';

const findStartPosition = (row: string[], startPosition: Position, y: number) => {
  const x = row.findIndex((char) => char === '^');

  if (x > -1) {
    startPosition.x = x;
    startPosition.y = y;
  }
};

const parseInput = (input: Input) => {
  const grid = [];

  const startPosition: Position = { x: -1, y: -1, direction: 0 };
  for (let y = 0; y < input.length; y++) {
    const line = input[y];
    const row = line.split('');

    if (y < line.length - 1) {
      row.pop();
    }

    if (startPosition.x === -1) {
      findStartPosition(row, startPosition, y);
    }

    grid.push(row);
  }

  return { grid, startPosition };
};

const main = (input: Input): Answer => {
  const { grid, startPosition } = parseInput(input);

  const part1 = solvePart1(grid, startPosition);
  const part2 = solvePart2(grid, startPosition);

  return {
    part1,
    part2,
  };
};

export default main;
