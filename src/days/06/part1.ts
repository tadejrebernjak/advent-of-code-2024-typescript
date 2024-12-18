import { DirectionCardinal, Grid, Position } from '../../types/grid.js';
import { copyGrid, getGridValue, getNewDirectionCardinal, updatePositionCardinal } from '../../utils/grid.js';

const solvePart1 = (initialGrid: Grid, startPosition: Position) => {
  const grid = copyGrid(initialGrid);

  let position = { ...startPosition };
  let direction: DirectionCardinal = '^';

  let sum = 1;
  while (true) {
    const nextPosition = updatePositionCardinal(position, direction);
    const nextValue = getGridValue(grid, nextPosition);

    if (nextValue === null) {
      break;
    }

    if (nextValue === '#') {
      direction = getNewDirectionCardinal(direction, 1);
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
