import { Grid, Position } from './types.js';
import { copyGrid, getGridValue, move, turn } from './utils.js';

const turnIsRepeat = (turns: Position[], { x, y, direction }: Position) => {
  return turns.some((turn) => turn.x === x && turn.y === y && turn.direction === direction);
};

const wouldLoop = (initialGrid: Grid, startPosition: Position, obstaclePosition: Position) => {
  const grid = copyGrid(initialGrid);

  grid[obstaclePosition.y][obstaclePosition.x] = '#';

  let position = { ...startPosition };
  position.direction = turn(position.direction);

  const turns: Position[] = [{ ...position }];

  while (true) {
    const { x, y, direction } = position;

    const nextPosition = move(x, y, direction);
    const nextValue = getGridValue(grid, nextPosition);

    if (nextValue === null) {
      return false;
    }

    if (nextValue === '#') {
      position.direction = turn(direction);

      if (turnIsRepeat(turns, position)) {
        return true;
      }

      turns.push({ ...position });
      continue;
    }

    position = nextPosition;
  }
};

const solvePart2 = (initialGrid: Grid, startPosition: Position) => {
  const grid = copyGrid(initialGrid);

  let position = { ...startPosition };
  let sum = 0;

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
      if (wouldLoop(grid, position, nextPosition)) {
        sum++;
      }

      grid[nextPosition.y][nextPosition.x] = 'X';
    }

    position = nextPosition;
  }

  return sum;
};

export default solvePart2;
