import { Equation } from './types.js';

const concatenate = (num1: number, num2: number) => {
  const str1 = num1.toString();
  const str2 = num2.toString();

  return +(str1 + str2);
};

const isSolvable = ({ expectedResult, numbers }: Equation, index: number, currentResult: number) => {
  const currentNumber = numbers[index];

  const addition = currentResult + currentNumber;
  const multiplication = (currentResult || 1) * currentNumber;
  const concatenation = concatenate(currentResult, currentNumber);

  const isLastCalculation = index >= numbers.length - 1;
  if (isLastCalculation) {
    return [addition, multiplication, concatenation].some((result) => result === expectedResult);
  }

  return (
    isSolvable({ expectedResult, numbers }, index + 1, addition) ||
    isSolvable({ expectedResult, numbers }, index + 1, multiplication) ||
    isSolvable({ expectedResult, numbers }, index + 1, concatenation)
  );
};

const solvePart2 = (equations: Equation[]) => {
  return equations.reduce((sum, equation) => (isSolvable(equation, 0, 0) ? sum + equation.expectedResult : sum), 0);
};

export default solvePart2;
