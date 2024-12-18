import { Grid, Position } from '../../types/grid.js';
import { getGridValue, updatePositionOrdinal } from '../../utils/grid.js';
import { buildWord } from './utils.js';

const reverseString = (string: string) => {
  return string.split('').reverse().join('');
};

const checkXWord = (grid: Grid, searchedWord: string, center: Position) => {
  const cornerOffset = Math.floor(searchedWord.length / 2);

  let startPosition = updatePositionOrdinal(center, 'up_left', cornerOffset);
  const fromTopLeft = buildWord(grid, searchedWord.length, startPosition, 'down_right');

  startPosition = updatePositionOrdinal(center, 'up_right', cornerOffset);
  const fromTopRight = buildWord(grid, searchedWord.length, startPosition, 'down_left');

  const reversedSearchedWord = reverseString(searchedWord);
  return [fromTopLeft, fromTopRight].every((word) => [searchedWord, reversedSearchedWord].includes(word));
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
      const position = { x, y };
      const value = getGridValue(grid, position);
      const notCenterLetter = value !== centerLetter;
      if (notCenterLetter) {
        continue;
      }

      if (checkXWord(grid, searchedWord, position)) {
        sum++;
      }
    }
  }

  return sum;
};

const solvePart2 = (grid: Grid) => {
  return countXWords(grid, 'MAS');
};

export default solvePart2;
