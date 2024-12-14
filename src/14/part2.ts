import { Coordinates, Grid, Robot } from './types.js';
import { simulateRobots } from './utils.js';

const getMapKey = ({ x, y }: Coordinates) => {
  return `${x}|${y}`;
};

const robotsAreNotOverlapping = (positions: Coordinates[]) => {
  const positionsMap = new Map<string, number>();

  for (const position of positions) {
    const key = getMapKey(position);
    if (positionsMap.has(key)) {
      return false;
    }

    positionsMap.set(key, 1);
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
