import { Position } from '../../types/grid.js';
import solvePart1 from './part1.js';

const binarySearch = (obstacles: Position[]) => {
  let start = 0;
  let end = obstacles.length;

  while (true) {
    const mid = Math.floor((start + end) / 2);

    if (start === end - 1) {
      return mid;
    }

    const result = solvePart1(obstacles, mid);
    if (result === Infinity) {
      end = mid;
    } else {
      start = mid;
    }
  }
};

const solvePart2 = (obstacles: Position[]) => {
  const blockingByteIndex = binarySearch(obstacles);
  const { x, y } = obstacles[blockingByteIndex];

  return `${x},${y}`;
};

export default solvePart2;
