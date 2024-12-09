import { Answer, Input } from '../baseTypes.js';
import solvePart1 from './part1.js';
import solvePart2 from './part2.js';

const addFile = (output: Array<number | null>, id: number, size: number) => {
  for (let i = 0; i < size; i++) {
    output.push(id);
  }
};

const addFreeSpace = (output: Array<number | null>, size: number) => {
  for (let i = 0; i < size; i++) {
    output.push(null);
  }
};

const parseInput = (inputLine: string) => {
  const chars = inputLine.split('');

  const output: Array<number | null> = [];
  let readingFile = true;
  let currentID = 0;

  for (const char of chars) {
    const size = parseInt(char);

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
  const inputLine = input[0];
  const parsedInput = parseInput(inputLine);

  const part1 = solvePart1(parsedInput);
  const part2 = solvePart2(parsedInput);

  return {
    part1,
    part2,
  };
};

export default main;
