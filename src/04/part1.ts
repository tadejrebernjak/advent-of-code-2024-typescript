import { Direction, Grid } from './types.js';
import { buildWord, getGridValue } from './utils.js';

const countWords = (grid: Grid, searchedWord: string) => {
  const DIRECTIONS: Direction[] = ['up', 'up_right', 'right', 'down_right', 'down', 'down_left', 'left', 'up_left'];

  let sum = 0;

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (getGridValue({ x, y }, grid) !== searchedWord[0]) {
        continue;
      }

      for (const direction of DIRECTIONS) {
        const word = buildWord(grid, searchedWord.length, x, y, direction);
        if (word === searchedWord) {
          sum++;
        }
      }
    }
  }

  return sum;
};

const solvePart1 = (grid: Grid) => {
  const result = countWords(grid, 'XMAS');

  return result;
};

export default solvePart1;
