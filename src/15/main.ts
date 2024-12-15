import { Answer, Input } from '../baseTypes.js';
import solvePart1 from './part1.js';
import { Grid, Position } from './types.js';

const parseGrid = (gridString: string, grid: Grid, robot: Position) => {
  for (const [y, line] of gridString.split('\n').entries()) {
    const row = line.split('');
    grid.push(row);

    if (robot.x !== -1) {
      continue;
    }

    const robotIndex = row.findIndex((char) => char === '@');
    if (robotIndex !== -1) {
      robot.x = robotIndex;
      robot.y = y;
    }
  }
};

const parseInput = (input: Input) => {
  const [gridString, movesString] = input.join('\n').split('\n\n');
  const robot = {
    x: -1,
    y: -1,
  };

  const grid = [];
  parseGrid(gridString, grid, robot);

  const moves = movesString.replaceAll('\n', '');

  return { grid, moves, robot };
};

const main = (input: Input): Answer => {
  const { grid, moves, robot } = parseInput(input);

  const part1 = solvePart1(grid, moves, robot);

  return {
    part1,
    part2: 0,
  };
};

export default main;
