import { Direction, updatePosition } from './utils.js';

const validateCenterPosition = (input: string[][], searchedWord: string, x: number, y: number) => {
  const maxPositionOffset = Math.floor(searchedWord.length / 2);

  const clipsLeft = x - maxPositionOffset < 0;
  const clipsRight = x + maxPositionOffset >= input[y].length;
  const clipsUp = y - maxPositionOffset < 0;
  const clipsDown = y + maxPositionOffset >= input.length;

  if (clipsLeft || clipsRight || clipsUp || clipsDown) {
    return false;
  }

  return true;
};

const checkWord = (
  input: string[][],
  searchedWord: string,
  centerX: number,
  centerY: number,
  startingPosition: Direction,
  direction: Direction,
) => {
  const positionOffset = Math.floor(searchedWord.length / 2);
  let { x, y } = updatePosition({ x: centerX, y: centerY }, startingPosition, positionOffset);

  for (let i = 0; i < searchedWord.length; i++) {
    const character = input[y][x];

    if (character !== searchedWord[i]) {
      return false;
    }

    ({ x, y } = updatePosition({ x, y }, direction));
  }

  return true;
};

const checkXWord = (input: string[][], searchedWord: string, x: number, y: number) => {
  if (!validateCenterPosition(input, searchedWord, x, y)) {
    return false;
  }

  const fromTopLeft = checkWord(input, searchedWord, x, y, 'up_left', 'down_right');
  const fromTopRight = checkWord(input, searchedWord, x, y, 'up_right', 'down_left');
  const fromBottomLeft = checkWord(input, searchedWord, x, y, 'down_left', 'up_right');
  const fromBottomRight = checkWord(input, searchedWord, x, y, 'down_right', 'up_left');

  const matches = [fromTopLeft, fromTopRight, fromBottomLeft, fromBottomRight].filter((value) => value === true);

  return matches.length >= 2;
};

const countXWords = (input: string[][], searchedWord: string) => {
  if (searchedWord.length % 2 === 0) {
    console.log(`Searched word: ${searchedWord} should have an odd length`);
    return 0;
  }

  const centerIndex = Math.floor(searchedWord.length / 2);
  const centerLetter = searchedWord[centerIndex];

  let sum = 0;

  for (const yKey in input) {
    for (const xKey in input[yKey]) {
      const y = parseInt(yKey);
      const x = parseInt(xKey);

      if (input[y][x] !== centerLetter) {
        continue;
      }

      if (checkXWord(input, searchedWord, x, y)) {
        sum++;
      }
    }
  }

  return sum;
};

const solvePart2 = (input: string[][]) => {
  const searchedWord = 'MAS';

  const result = countXWords(input, searchedWord);

  return result;
};

export default solvePart2;
