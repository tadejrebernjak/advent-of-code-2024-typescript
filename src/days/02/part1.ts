import { isSafe } from './utils.js';

const solvePart1 = (reports: number[][]) => {
  const safeReports = reports.filter((report) => isSafe(report));
  return safeReports.length;
};

export default solvePart1;
