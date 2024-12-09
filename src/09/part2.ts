import { FreeSpace, ParsedInput } from './types.js';
import { calculateCheckSum, swap } from './utils.js';

const getFileLength = (input: ParsedInput, currentIndex: number) => {
  const fileID = input[currentIndex];

  let length = 1;
  for (let i = currentIndex - 1; i >= 0; i--) {
    if (input[i] !== fileID) {
      break;
    }

    length++;
  }

  return length;
};

const getFreeSpaceLength = (input: ParsedInput, currentIndex: number) => {
  let length = 1;

  for (let i = currentIndex + 1; i < input.length; i++) {
    if (input[i] !== null) {
      break;
    }

    length++;
  }

  return length;
};

const moveFile = (input: ParsedInput, fileIndex: number, fileLength: number, freeIndex: number) => {
  for (let i = 0; i < fileLength; i++) {
    swap(input, freeIndex + i, fileIndex - i);
  }
};

const sort = (input: ParsedInput, freeSpaces: FreeSpace[]) => {
  let fileLength = 1;

  for (let i = input.length - 1; i >= 0; i -= fileLength) {
    const fileID = input[i];
    if (fileID === null) {
      fileLength = 1;
      continue;
    }

    fileLength = getFileLength(input, i);
    const freeSpaceIndex = freeSpaces.findIndex(({ length }) => length >= fileLength);

    if (freeSpaceIndex === -1) {
      continue;
    }

    const freeSpace = freeSpaces[freeSpaceIndex];
    if (freeSpace.startIndex >= i) {
      continue;
    }

    moveFile(input, i, fileLength, freeSpace.startIndex);

    if (fileLength === freeSpace.length) {
      freeSpaces.splice(freeSpaceIndex, 1);
      continue;
    }

    freeSpace.startIndex += fileLength;
    freeSpace.length -= fileLength;
  }
};

const storeFreeSpaces = (input: ParsedInput) => {
  const freeSpaces = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i] !== null) {
      continue;
    }

    const length = getFreeSpaceLength(input, i);
    const freeSpace = {
      startIndex: i,
      length,
    };

    freeSpaces.push(freeSpace);
    i += length - 1;
  }

  return freeSpaces;
};

const solvePart2 = (initialInput: ParsedInput) => {
  const input = [...initialInput];
  const freeSpaces = storeFreeSpaces(input);

  sort(input, freeSpaces);
  return calculateCheckSum(input);
};

export default solvePart2;
