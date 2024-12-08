import { Grid, Position } from './types.js';

export const outOfBounds = (grid: Grid, { x, y }: Position) => {
  return y < 0 || y >= grid.length || x < 0 || x >= grid[y].length;
};

export const antinodeExists = ({ x, y }: Position, antinodes: Position[]) => {
  return antinodes.some((antinode) => antinode.x === x && antinode.y === y);
};
