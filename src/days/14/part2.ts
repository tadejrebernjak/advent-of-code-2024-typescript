import { Position } from '../../types/grid.js';
import { Dimension, Robot } from './types.js';
import { simulateRobots } from './utils.js';

const getMapKey = ({ x, y }: Position) => {
  return `${x}|${y}`;
};

const robotsAreNotOverlapping = (positions: Position[]) => {
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

const solvePart2 = (dimensions: Dimension, robots: Robot[]) => {
  const SECONDS_UNTIL_REPEAT = dimensions.width * dimensions.height;

  for (let seconds = 1; seconds < SECONDS_UNTIL_REPEAT; seconds++) {
    const robotPositions = simulateRobots(dimensions, robots, seconds);
    if (robotsAreNotOverlapping(robotPositions)) {
      return seconds;
    }
  }

  return 0;
};

export default solvePart2;
