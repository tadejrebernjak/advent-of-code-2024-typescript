import { Direction, Grid } from './types.js';
import { getGridValue, updatePosition } from './utils.js';

const checkWord = (
  grid: Grid,
  searchedWord: string,
  centerX: number,
  centerY: number,
  startingPosition: Direction,
  direction: Direction,
) => {
  const positionOffset = Math.floor(searchedWord.length / 2);
  let { x, y } = updatePosition({ x: centerX, y: centerY }, startingPosition, positionOffset);

  for (let i = 0; i < searchedWord.length; i++) {
    const character = getGridValue({ x, y }, grid);

    if (character !== searchedWord[i]) {
      return false;
    }

    ({ x, y } = updatePosition({ x, y }, direction));
  }

  return true;
};

const checkXWord = (grid: Grid, searchedWord: string, x: number, y: number) => {
  const fromTopLeft = checkWord(grid, searchedWord, x, y, 'up_left', 'down_right');
  const fromTopRight = checkWord(grid, searchedWord, x, y, 'up_right', 'down_left');
  const fromBottomLeft = checkWord(grid, searchedWord, x, y, 'down_left', 'up_right');
  const fromBottomRight = checkWord(grid, searchedWord, x, y, 'down_right', 'up_left');

  const matches = [fromTopLeft, fromTopRight, fromBottomLeft, fromBottomRight].filter((value) => value);

  return matches.length >= 2;
};

const countXWords = (grid: Grid, searchedWord: string) => {
  if (searchedWord.length % 2 === 0) {
    console.log(`Searched word: ${searchedWord} should have an odd length`);
    return 0;
  }

  const searchedWordCenter = Math.floor(searchedWord.length / 2);
  const centerLetter = searchedWord[searchedWordCenter];

  let sum = 0;

  for (let y = searchedWordCenter; y + searchedWordCenter < grid.length; y++) {
    const row = grid[y];

    for (let x = searchedWordCenter; x + searchedWordCenter < row.length; x++) {
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
