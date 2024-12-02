const checkIncreasing = (a: number, b: number) => {
  return a < b;
};

const checkDecreasing = (a: number, b: number) => {
  return a > b;
};

const isSafe = (report: number[]) => {
  if (report.length <= 1) {
    return { reportIsSafe: true, badIndex: -1 };
  }

  const firstNumber = report[0];
  const secondNumber = report[1];

  const isIncreasing = firstNumber < secondNumber;
  const checkFunction = isIncreasing ? checkIncreasing : checkDecreasing;

  let badIndex = -1;

  const reportIsSafe = report.every((number, index, array) => {
    if (index === 0) {
      return true;
    }

    const prevNumber = array[index - 1];
    const difference = Math.abs(prevNumber - number);
    const differenceIsValid = difference >= 1 && difference <= 3;

    const result = checkFunction(prevNumber, number) && differenceIsValid;

    if (!result) {
      badIndex = index;
    }

    return result;
  });

  return { reportIsSafe, badIndex };
};

const solvePart2 = (reports: number[][]) => {
  let safeReportsSum = 0;

  for (const report of reports) {
    let { reportIsSafe, badIndex } = isSafe(report);

    if (reportIsSafe) {
      safeReportsSum++;
      continue;
    }

    const reportWithoutBadIndex = report.filter((_, i) => i !== badIndex);
    ({ reportIsSafe } = isSafe(reportWithoutBadIndex));

    if (reportIsSafe) {
      safeReportsSum++;
      continue;
    }

    const reportWithoutFirstIndex = report.filter((_, i) => i !== 0);
    ({ reportIsSafe } = isSafe(reportWithoutFirstIndex));

    if (reportIsSafe) {
      safeReportsSum++;
    }
  }

  return safeReportsSum;
};

export default solvePart2;
