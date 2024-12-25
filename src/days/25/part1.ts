const overlaps = (lock: number[], key: number[]) => {
  for (const [index, lockColumn] of lock.entries()) {
    const keyColumn = key[index];
    if (keyColumn + lockColumn >= 6) {
      return true;
    }
  }

  return false;
};

const solvePart1 = (locks: number[][], keys: number[][]) => {
  let sum = 0;
  for (const lock of locks) {
    for (const key of keys) {
      if (!overlaps(lock, key)) {
        sum++;
      }
    }
  }

  return sum;
};

export default solvePart1;
