import { isSafe } from './utils.js';

const isSafeWithoutOneLevel = (report: number[]) => {
  for (const i in report) {
    const reportWithoutIndex = report.filter((_, index) => index !== +i);

    if (isSafe(reportWithoutIndex)) {
      return true;
    }
  }

  return false;
};

const solvePart2 = (reports: number[][]) => {
  const safeReports = reports.filter((report) => isSafeWithoutOneLevel(report));
  return safeReports.length;
};

export default solvePart2;
