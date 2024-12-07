import { Equation } from './types.js';

const isSolvable = ({ expectedResult, numbers }: Equation, index: number, currentResult: number) => {
  const currentNumber = numbers[index];

  const addition = currentResult + currentNumber;
  const multiplication = (currentResult || 1) * currentNumber;

  const isLastCalculation = index >= numbers.length - 1;
  if (isLastCalculation) {
    return addition === expectedResult || multiplication === expectedResult;
  }

  const recursionFromAddition = isSolvable({ expectedResult, numbers }, index + 1, addition);
  const recursionFromMultiplication = isSolvable({ expectedResult, numbers }, index + 1, multiplication);

  return recursionFromAddition || recursionFromMultiplication;
};

const solvePart1 = (equations: Equation[]) => {
  let sum = 0;

  for (const equation of equations) {
    if (isSolvable(equation, 0, 0)) {
      sum += equation.expectedResult;
    }
  }

  return sum;
};

export default solvePart1;
