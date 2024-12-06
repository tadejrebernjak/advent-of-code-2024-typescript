import { Direction, Grid, Position } from './types.js';

export const copyGrid = (grid: Grid) => {
  return grid.map((row) => row.slice());
};

export const inBounds = (grid: Grid, x: number, y: number) => {
  return y >= 0 && y < grid.length && x >= 0 && x < grid[y].length;
};

export const getGridValue = (grid: Grid, { x, y }: Position) => {
  return inBounds(grid, x, y) ? grid[y][x] : null;
};

export const move = (x: number, y: number, direction: Direction) => {
  if (direction === 0) y--;
  if (direction === 1) x++;
  if (direction === 2) y++;
  if (direction === 3) x--;

  return { x, y, direction };
};

export const turn = (direction: Direction) => {
  return ((direction + 1) % 4) as Direction;
};
