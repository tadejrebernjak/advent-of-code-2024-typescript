import { Answer, Input } from '../../types/base.js';
import { Position } from '../../types/grid.js';
import solvePart1 from './part1.js';

const findStart = (row: string[], y: number) => {
  const x = row.indexOf('S');
  if (x === -1) {
    return undefined;
  }

  return { x, y };
};

const parseInput = (input: Input) => {
  const grid = [];
  let start: Position;

  for (const [y, line] of input.entries()) {
    const row = line.split('');
    grid.push(row);

    if (start === undefined) {
      start = findStart(row, y);
    }
  }

  return { grid, start };
};

const main = (input: Input): Answer => {
  const { grid, start } = parseInput(input);

  const part1 = solvePart1(grid, start);

  return {
    part1,
    part2: 0,
  };
};

export default main;
