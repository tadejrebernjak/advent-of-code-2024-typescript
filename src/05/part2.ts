import solvePart1 from './part1.js';

const sortUpdate = (update: number[], constraints: number[][]) => {
  for (let i = 0; i < update.length; i++) {
    const number = update[i];
    let swapped = false;

    for (const constraint of constraints[number]) {
      for (let j = i + 1; j < update.length; j++) {
        if (constraint === update[j]) {
          [update[i], update[j]] = [update[j], update[i]];
          swapped = true;
          break;
        }
      }

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

  return solvePart1(updates, [], constraints);
};

export default solvePart2;
