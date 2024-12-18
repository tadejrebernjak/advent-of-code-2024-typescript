import { swap } from '../../utils/array.js';
import solvePart1 from './part1.js';

const scanToEnd = (update: number[], constraint: number, startIndex: number) => {
  for (let i = startIndex + 1; i < update.length; i++) {
    if (constraint === update[i]) {
      swap(update, startIndex, i);
      return true;
    }
  }

  return false;
};

const sortUpdate = (update: number[], constraints: number[][]) => {
  for (let i = 0; i < update.length; i++) {
    const number = update[i];

    for (const constraint of constraints[number]) {
      const swapped = scanToEnd(update, constraint, i);
      if (swapped) {
        i--;
        break;
      }
    }
  }
};

const solvePart2 = (updates: number[][], constraints: number[][]) => {
  for (const update of updates) {
    sortUpdate(update, constraints);
  }

  const { sum } = solvePart1(updates, constraints);
  return sum;
};

export default solvePart2;
