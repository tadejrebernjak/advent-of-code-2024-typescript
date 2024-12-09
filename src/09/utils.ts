import { ParsedInput } from './types.js';

export const swap = (input: ParsedInput, firstIndex: number, secondIndex: number) => {
  [input[firstIndex], input[secondIndex]] = [input[secondIndex], input[firstIndex]];
};

export const calculateCheckSum = (input: ParsedInput) => {
  return input.reduce((sum, fileID, index) => sum + index * fileID, 0);
};
