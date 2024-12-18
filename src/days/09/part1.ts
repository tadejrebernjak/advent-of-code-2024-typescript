import { swap } from '../../utils/array.js';
import { ParsedInput } from './types.js';
import { calculateCheckSum } from './utils.js';

const sort = (input: ParsedInput) => {
  for (let i = input.length - 1; i > input.length / 2; i--) {
    const number = input[i];
    if (number === null) {
      continue;
    }

    const freeIndex = input.indexOf(null);
    if (freeIndex >= i) {
      return;
    }

    swap(input, freeIndex, i);
  }
};

const solvePart1 = (initialInput: ParsedInput) => {
  const input = [...initialInput];
  sort(input);

  return calculateCheckSum(input);
};

export default solvePart1;
