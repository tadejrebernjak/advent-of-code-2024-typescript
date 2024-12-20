import { Answer, Input } from '../../types/base.js';
import { Grid, Position } from '../../types/grid.js';
import solvePart1 from './part1.js';

const findChar = (row: string[], char: string, y: number) => {
  const x = row.indexOf(char);
  if (x === -1) {
    return undefined;
  }

  return { x, y };
};

const parseInput = (input: Input) => {
  const grid: Grid = [];
  let start: Position;
  let end: Position;

  for (const [y, line] of input.entries()) {
    const row = line.split('');
    grid.push(row);

    if (!start) {
      start = findChar(row, 'S', y);
    }

    if (!end) {
      end = findChar(row, 'E', y);
    }
  }

  return { grid, start, end };
};

const main = (input: Input): Answer => {
  const { grid, start, end } = parseInput(input);

  const part1 = solvePart1(grid, start, end);

  return {
    part1,
    part2: 0,
  };
};

export default main;
