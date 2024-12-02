const checkIncreasing = (a: number, b: number) => {
  return a < b;
};

const checkDecreasing = (a: number, b: number) => {
  return a > b;
};

const isSafe = (report: number[]) => {
  if (report.length <= 1) {
    return true;
  }

  const firstNumber = report[0];
  const secondNumber = report[1];

  const isIncreasing = firstNumber < secondNumber;
  const checkFunction = isIncreasing ? checkIncreasing : checkDecreasing;

  const reportIsSafe = report.every((number, index, array) => {
    if (index === 0) {
      return true;
    }

    const prevNumber = array[index - 1];
    const difference = Math.abs(prevNumber - number);
    const differenceIsValid = difference >= 1 && difference <= 3;

    return checkFunction(prevNumber, number) && differenceIsValid;
  });

  return reportIsSafe;
};

const solvePart1 = (reports: number[][]) => {
  let safeReportsSum = 0;

  console.log(reports);

  for (const report of reports) {
    if (isSafe(report)) {
      safeReportsSum++;
    }
  }

  return safeReportsSum;
};

export default solvePart1;
