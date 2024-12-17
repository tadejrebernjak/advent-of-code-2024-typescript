import { Coordinates, Grid, Robot } from './types.js';
import { simulateRobots } from './utils.js';

const getMapKey = ({ x, y }: Coordinates) => {
  return `${x}|${y}`;
};

const robotsAreNotOverlapping = (positions: Coordinates[]) => {
  const uniquePositions = new Set<string>();

  for (const position of positions) {
    const key = getMapKey(position);
    if (uniquePositions.has(key)) {
      return false;
    }

    uniquePositions.add(key);
  }

  return true;
};

const solvePart2 = (grid: Grid, robots: Robot[]) => {
  const SECONDS_TO_REPEAT = grid.width * grid.height;

  for (let seconds = 1; seconds < SECONDS_TO_REPEAT; seconds++) {
    const robotPositions = simulateRobots(grid, robots, seconds);
    if (robotsAreNotOverlapping(robotPositions)) {
      return seconds;
    }
  }

  return 0;
};

export default solvePart2;
