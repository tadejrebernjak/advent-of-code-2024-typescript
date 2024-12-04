import { MUL_REGEX, calculateSum } from './utils.js';

const solvePart1 = (input: string) => {
  const instructions = [...input.matchAll(MUL_REGEX)];
  const result = calculateSum(instructions);

  return result;
};

export default solvePart1;
