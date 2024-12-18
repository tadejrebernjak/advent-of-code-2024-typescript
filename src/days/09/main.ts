import { Answer, Input } from '../../types/base.js';
import solvePart1 from './part1.js';
import solvePart2 from './part2.js';
import { ParsedInput } from './types.js';

const addFile = (output: ParsedInput, id: number, size: number) => {
  for (let i = 0; i < size; i++) {
    output.push(id);
  }
};

const addFreeSpace = (output: ParsedInput, size: number) => {
  for (let i = 0; i < size; i++) {
    output.push(null);
  }
};

const parseInput = (input: string) => {
  const chars = input.split('');

  const output: ParsedInput = [];
  let readingFile = true;
  let currentID = 0;

  for (const char of chars) {
    const size = +char;

    if (readingFile) {
      addFile(output, currentID, size);
      currentID++;
    } else {
      addFreeSpace(output, size);
    }

    readingFile = !readingFile;
  }

  return output;
};

const main = (input: Input): Answer => {
  const parsedInput = parseInput(input[0]);

  const part1 = solvePart1(parsedInput);
  const part2 = solvePart2(parsedInput);

  return {
    part1,
    part2,
  };
};

export default main;
