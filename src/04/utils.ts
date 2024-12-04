import { Direction, Grid, Position } from './types.js';

export const DEFAULT_CHARACTER = '.';

export const updatePosition = ({ x, y }: Position, direction: Direction, offset?: number) => {
  offset = offset || 1;

  if (direction.includes('left')) {
    x -= offset;
  }

  if (direction.includes('right')) {
    x += offset;
  }

  if (direction.includes('down')) {
    y += offset;
  }

  if (direction.includes('up')) {
    y -= offset;
  }

  return { x, y };
};

export const getGridValue = ({ x, y }: Position, grid: Grid) => {
  const outOfBounds = y < 0 || x < 0 || y >= grid.length || y >= grid[y].length;

  return outOfBounds ? DEFAULT_CHARACTER : grid[y][x];
};
