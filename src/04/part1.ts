import { Direction, updatePosition } from './utils.js';

const validateDirection = (input: string[][], searchedWord: string, x: number, y: number, direction: Direction) => {
  const clipsLeft = direction.includes('left') && x + 1 - searchedWord.length < 0;
  const clipsRight = direction.includes('right') && x + searchedWord.length > input[y].length;
  const clipsUp = direction.includes('up') && y + 1 - searchedWord.length < 0;
  const clipsDown = direction.includes('down') && y + searchedWord.length > input.length;

  if (clipsLeft || clipsRight || clipsUp || clipsDown) {
    return false;
  }

  return true;
};

const checkWord = (input: string[][], searchedWord: string, x: number, y: number, direction: Direction) => {
  if (!validateDirection(input, searchedWord, x, y, direction)) {
    return false;
  }

  for (let i = 0; i < searchedWord.length; i++) {
    const character = input[y][x];

    if (character !== searchedWord[i]) {
      return false;
    }

    ({ x, y } = updatePosition({ x, y }, direction));
  }

  return true;
};

const countWords = (input: string[][], searchedWord: string) => {
  const DIRECTIONS: Direction[] = ['up', 'up_right', 'right', 'down_right', 'down', 'down_left', 'left', 'up_left'];

  let sum = 0;

  for (const yKey in input) {
    for (const xKey in input[yKey]) {
      const y = parseInt(yKey);
      const x = parseInt(xKey);

      if (input[y][x] !== searchedWord[0]) {
        continue;
      }

      for (const direction of DIRECTIONS) {
        if (checkWord(input, searchedWord, x, y, direction)) {
          sum++;
        }
      }
    }
  }

  return sum;
};

const solvePart1 = (input: string[][]) => {
  const searchedWord = 'XMAS';

  const result = countWords(input, searchedWord);

  return result;
};

export default solvePart1;
