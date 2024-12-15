import { Direction, Grid, Position } from './types.js';

const inBounds = (grid: Grid, x: number, y: number) => {
  return y >= 0 && y < grid.length && x >= 0 && x < grid[y].length;
};

export const getGridValue = (grid: Grid, { x, y }: Position) => {
  return inBounds(grid, x, y) ? grid[y][x] : null;
};

export const setGridValue = (grid: Grid, { x, y }: Position, value: string) => {
  if (!inBounds(grid, x, y)) {
    return;
  }

  grid[y][x] = value;
};

export const updatePosition = ({ x, y }: Position, direction: Direction) => {
  if (direction === '^') y--;
  if (direction === '>') x++;
  if (direction === 'v') y++;
  if (direction === '<') x--;

  return { x, y };
};
