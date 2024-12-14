import { Coordinates, Grid, Robot } from './types.js';
import { simulateRobots } from './utils.js';

const assignQuadrant = (xMid: number, yMid: number, { x, y }: Coordinates) => {
  if (x > xMid && y < yMid) return 0;
  if (x < xMid && y < yMid) return 1;
  if (x < xMid && y > yMid) return 2;
  if (x > xMid && y > yMid) return 3;

  return -1;
};

const countQuadrants = ({ width, height }: Grid, positions: Coordinates[]) => {
  const quadrants = Array(4).fill(0);

  const xMid = Math.floor(width / 2);
  const yMid = Math.floor(height / 2);

  for (const position of positions) {
    const quadrant = assignQuadrant(xMid, yMid, position);
    if (quadrant !== -1) {
      quadrants[quadrant]++;
    }
  }

  return quadrants;
};

const solvePart1 = (grid: Grid, robots: Robot[], seconds: number) => {
  const endPositions = simulateRobots(grid, robots, seconds);
  const quadrants = countQuadrants(grid, endPositions);

  return quadrants.reduce((product, value) => product * value, 1);
};

export default solvePart1;
