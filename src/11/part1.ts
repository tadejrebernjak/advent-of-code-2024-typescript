import { isEvenLength, splitStone } from './utils.js';

const insertAt = (array: number[], index: number, item: number) => {
  array.splice(index, 0, item);
};

const processStones = (stones: number[]) => {
  for (let i = stones.length - 1; i >= 0; i--) {
    const stone = stones[i];

    if (stone === 0) {
      stones[i] = 1;
      continue;
    }

    if (isEvenLength(stone)) {
      const [left, right] = splitStone(stone);
      stones[i] = left;
      insertAt(stones, i + 1, right);
      continue;
    }

    stones[i] *= 2024;
  }
};

const solvePart1 = (stones: number[], numBlinks: number) => {
  stones = [...stones];

  for (let i = 0; i < numBlinks; i++) {
    processStones(stones);
  }

  return stones.length;
};

export default solvePart1;
