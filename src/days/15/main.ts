import { Answer, Input } from '../../types/base.js';
import { Position } from '../../types/grid.js';
import solvePart1 from './part1.js';

const findRobot = (row: string[], y: number) => {
  const x = row.indexOf('@');
  if (x === -1) {
    return undefined;
  }

  return { x, y };
};

const parseGrid = (gridString: string) => {
  const grid = [];
  let robot: Position;

  for (const [y, line] of gridString.split('\n').entries()) {
    const row = line.split('');
    grid.push(row);

    if (robot !== undefined) {
      continue;
    }

    robot = findRobot(row, y);
  }

  return { grid, robot };
};

const parseInput = (input: Input) => {
  const [gridString, movesString] = input.join('\n').split('\n\n');

  const { grid, robot } = parseGrid(gridString);
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
