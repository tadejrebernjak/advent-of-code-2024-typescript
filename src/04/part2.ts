import { Grid } from './types.js';
import { buildWord, getGridValue, updatePosition } from './utils.js';

const reverseString = (string: string) => {
  return string.split('').reverse().join('');
};

const checkXWord = (grid: Grid, searchedWord: string, centerX: number, centerY: number) => {
  const offset = Math.floor(searchedWord.length / 2);

  let { x, y } = updatePosition({ x: centerX, y: centerY }, 'up_left', offset);
  const fromTopLeft = buildWord(grid, searchedWord.length, x, y, 'down_right');

  ({ x, y } = updatePosition({ x: centerX, y: centerY }, 'up_right', offset));
  const fromTopRight = buildWord(grid, searchedWord.length, x, y, 'down_left');

  return [fromTopLeft, fromTopRight].every((word) => word === searchedWord || word === reverseString(searchedWord));
};

const countXWords = (grid: Grid, searchedWord: string) => {
  if (searchedWord.length % 2 === 0) {
    console.log(`Searched word: ${searchedWord} should have an odd length`);
    return 0;
  }

  const searchedWordCenter = Math.floor(searchedWord.length / 2);
  const centerLetter = searchedWord[searchedWordCenter];

  const start = searchedWordCenter;
  const end = grid.length - searchedWordCenter;
  let sum = 0;

  for (let y = start; y < end; y++) {
    const end = grid[y].length - searchedWordCenter;

    for (let x = start; x < end; x++) {
      if (getGridValue({ x, y }, grid) !== centerLetter) {
        continue;
      }

      if (checkXWord(grid, searchedWord, x, y)) {
        sum++;
      }
    }
  }

  return sum;
};

const solvePart2 = (grid: Grid) => {
  const result = countXWords(grid, 'MAS');

  return result;
};

export default solvePart2;
