const isValid = (update: number[], constraints: number[][]) => {
  for (const [index, number] of update.entries()) {
    const remainingNumbers = update.slice(index);

    for (const constraint of constraints[number]) {
      if (remainingNumbers.includes(constraint)) {
        return false;
      }
    }
  }

  return true;
};

const getMiddleNumber = (update: number[]) => {
  const middleIndex = Math.floor(update.length / 2);
  return update[middleIndex];
};

const solvePart1 = (updates: number[][], incorrectUpdates: number[][], constraints: number[][]) => {
  let sum = 0;

  for (const update of updates) {
    if (!isValid(update, constraints)) {
      incorrectUpdates.push(update);
      continue;
    }

    sum += getMiddleNumber(update);
  }

  return sum;
};

export default solvePart1;
