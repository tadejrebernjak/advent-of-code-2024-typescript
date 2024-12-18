import { DirectionCardinal, Grid, Position, Turn } from '../../types/grid.js';
import { copyGrid, getGridValue, getNewDirectionCardinal, updatePositionCardinal } from '../../utils/grid.js';

const turnIsRepeat = (turns: Turn[], { x, y, direction }: Turn) => {
  return turns.some((turn) => turn.x === x && turn.y === y && turn.direction === direction);
};

const wouldLoop = (
  initialGrid: Grid,
  startPosition: Position,
  direction: DirectionCardinal,
  obstaclePosition: Position,
) => {
  const grid = copyGrid(initialGrid);
  grid[obstaclePosition.y][obstaclePosition.x] = '#';

  let position = { ...startPosition };
  direction = getNewDirectionCardinal(direction, 1);

  const turns: Turn[] = [{ ...position, direction }];

  while (true) {
    const nextPosition = updatePositionCardinal(position, direction);
    const nextValue = getGridValue(grid, nextPosition);

    if (nextValue === null) {
      return false;
    }

    if (nextValue === '#') {
      direction = getNewDirectionCardinal(direction, 1);
      const newTurn = { ...position, direction };

      if (turnIsRepeat(turns, newTurn)) {
        return true;
      }

      turns.push(newTurn);
      continue;
    }

    position = nextPosition;
  }
};

const solvePart2 = (initialGrid: Grid, startPosition: Position) => {
  const grid = copyGrid(initialGrid);

  let position = { ...startPosition };
  let direction: DirectionCardinal = '^';

  let sum = 0;
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
      if (wouldLoop(grid, position, direction, nextPosition)) {
        sum++;
      }

      grid[nextPosition.y][nextPosition.x] = 'X';
    }

    position = nextPosition;
  }

  return sum;
};

export default solvePart2;
