import { Answer, Input } from '../../types/base.js';
import { Position } from '../../types/grid.js';
import solvePart1 from './part1.js';
import solvePart2 from './part2.js';

const findStartPosition = (row: string[], y: number): Position => {
  const x = row.findIndex((char) => char === '^');
  if (x === -1) {
    return undefined;
  }

  return { x, y };
};

const parseInput = (input: Input) => {
  const grid = [];
  let startPosition: Position;

  for (let y = 0; y < input.length; y++) {
    const line = input[y];
    const row = line.split('');

    if (!startPosition) {
      startPosition = findStartPosition(row, y);
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
