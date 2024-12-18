import { Grid } from '../../types/grid.js';
import { DIRECTIONS_ORDINAL, getGridValue } from '../../utils/grid.js';
import { buildWord } from './utils.js';

const countMatchingWords = (grid: Grid, searchedWord: string) => {
  let sum = 0;
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      const position = { x, y };
      const value = getGridValue(grid, position);
      const notStartingLetter = value !== searchedWord[0];
      if (notStartingLetter) {
        continue;
      }

      for (const direction of DIRECTIONS_ORDINAL) {
        const word = buildWord(grid, searchedWord.length, position, direction);
        if (word === searchedWord) {
          sum++;
        }
      }
    }
  }

  return sum;
};

const solvePart1 = (grid: Grid) => {
  return countMatchingWords(grid, 'XMAS');
};

export default solvePart1;
