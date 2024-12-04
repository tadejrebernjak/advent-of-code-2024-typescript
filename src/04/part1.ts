import { Direction, Grid } from './types.js';
import { getGridValue, updatePosition } from './utils.js';

const checkWord = (grid: Grid, searchedWord: string, x: number, y: number, direction: Direction) => {
  for (let i = 0; i < searchedWord.length; i++) {
    const character = getGridValue({ x, y }, grid);

    if (character !== searchedWord[i]) {
      return false;
    }

    ({ x, y } = updatePosition({ x, y }, direction));
  }

  return true;
};

const countWords = (grid: Grid, searchedWord: string) => {
  const DIRECTIONS: Direction[] = ['up', 'up_right', 'right', 'down_right', 'down', 'down_left', 'left', 'up_left'];

  let sum = 0;

  for (let y = 0; y < grid.length; y++) {
    const row = grid[y];

    for (let x = 0; x < row.length; x++) {
      if (grid[y][x] !== searchedWord[0]) {
        continue;
      }

      for (const direction of DIRECTIONS) {
        if (checkWord(grid, searchedWord, x, y, direction)) {
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
