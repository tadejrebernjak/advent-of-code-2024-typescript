import { isSafe } from './utils.js';

const solvePart1 = (reports: number[][]) => {
  let safeReportsSum = 0;

  for (const report of reports) {
    if (isSafe(report)) {
      safeReportsSum++;
    }
  }

  return safeReportsSum;
};

export default solvePart1;
