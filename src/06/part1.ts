import { Grid, Position } from './types.js';
import { copyGrid, getGridValue, move, turn } from './utils.js';

const solvePart1 = (initialGrid: Grid, startPosition: Position) => {
  const grid = copyGrid(initialGrid);

  let position = { ...startPosition };
  let sum = 1;

  while (true) {
    const { x, y, direction } = position;

    const nextPosition = move(x, y, direction);
    const nextValue = getGridValue(grid, nextPosition);

    if (nextValue === null) {
      break;
    }

    if (nextValue === '#') {
      position.direction = turn(direction);
      continue;
    }

    if (nextValue === '.') {
      sum++;
      grid[nextPosition.y][nextPosition.x] = 'X';
    }

    position = nextPosition;
  }

  return sum;
};

export default solvePart1;
