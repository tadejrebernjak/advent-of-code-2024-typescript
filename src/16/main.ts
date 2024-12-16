import { Answer, Input } from '../baseTypes.js';
import solvePart1 from './part1.js';
import { Grid, Position } from './types.js';

const parseGrid = (input: string[], grid: Grid, start: Position) => {
  for (const [y, line] of input.entries()) {
    const row = line.split('');
    grid.push(row);

    if (start.x !== -1) {
      continue;
    }

    const startX = row.findIndex((char) => char === 'S');
    if (startX !== -1) {
      start.x = startX;
      start.y = y;
    }
  }
};

const parseInput = (input: Input) => {
  const start = {
    x: -1,
    y: -1,
  };

  const grid = [];
  parseGrid(input, grid, start);

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
