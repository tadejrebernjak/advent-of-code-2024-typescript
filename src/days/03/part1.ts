import { MUL_REGEX, calculateSum } from './utils.js';

const solvePart1 = (input: string) => {
  const instructions = [...input.matchAll(MUL_REGEX)];
  return calculateSum(instructions);
};

export default solvePart1;
