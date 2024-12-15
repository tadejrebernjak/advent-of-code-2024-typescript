import { Direction, Grid, Position } from './types.js';
import { getGridValue, setGridValue, updatePosition } from './utils.js';

const move = (grid: Grid, position: Position, direction: Direction) => {
  const value = getGridValue(grid, position);
  if (value === '.') {
    return true;
  }

  if (value === '#') {
    return false;
  }

  if (value === 'O') {
    const newPosition = updatePosition(position, direction);
    if (move(grid, newPosition, direction)) {
      setGridValue(grid, newPosition, value);
      return true;
    }

    return false;
  }
};

const attemptMove = (grid: Grid, position: Position, direction: Direction) => {
  const newPosition = updatePosition(position, direction);

  if (move(grid, newPosition, direction)) {
    setGridValue(grid, newPosition, '@');
    setGridValue(grid, position, '.');
    return newPosition;
  }

  return position;
};

const findBoxes = (grid: Grid) => {
  const boxes = [];

  for (let y = 1; y < grid.length - 1; y++) {
    for (let x = 1; x < grid[y].length - 1; x++) {
      if (getGridValue(grid, { x, y }) === 'O') {
        boxes.push({ x, y });
      }
    }
  }

  return boxes;
};

const solvePart1 = (grid: Grid, moves: string, robotPosition: Position) => {
  for (const direction of moves) {
    robotPosition = attemptMove(grid, robotPosition, direction as Direction);
  }

  const boxes = findBoxes(grid);
  return boxes.reduce((sum, { x, y }) => sum + 100 * y + x, 0);
};

export default solvePart1;
