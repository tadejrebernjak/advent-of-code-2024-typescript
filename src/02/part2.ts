import { isSafe } from './utils.js';

const solvePart2 = (reports: number[][]) => {
  let safeReportsSum = 0;

  for (const report of reports) {
    for (let i = 0; i < report.length; i++) {
      const reportWithoutIndex = report.filter((_, index) => index !== i);

      if (isSafe(reportWithoutIndex)) {
        safeReportsSum++;
        break;
      }
    }
  }

  return safeReportsSum;
};

export default solvePart2;
