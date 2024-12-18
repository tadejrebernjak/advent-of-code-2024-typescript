import { Direction, Grid, Position } from './types.js';

export const WIDTH = 71,
  HEIGHT = 71;
export const DIRECTIONS: Direction[] = ['^', '>', 'v', '<'];

export const isEnd = ({ x, y }: Position) => {
  return x === WIDTH - 1 && y === HEIGHT - 1;
};

const inBounds = (grid: Grid, x: number, y: number) => {
  return y >= 0 && y < grid.length && x >= 0 && x < grid[y].length;
};

export const getGridValue = (grid: Grid, { x, y }: Position) => {
  return inBounds(grid, x, y) ? grid[y][x] : null;
};

export const updatePosition = ({ x, y }: Position, direction: Direction) => {
  if (direction === '^') y--;
  if (direction === '>') x++;
  if (direction === 'v') y++;
  if (direction === '<') x--;

  return { x, y };
};
