import { ParsedInput } from './types.js';

export const calculateCheckSum = (input: ParsedInput) => {
  return input.reduce((sum, fileID, index) => sum + index * fileID, 0);
};
