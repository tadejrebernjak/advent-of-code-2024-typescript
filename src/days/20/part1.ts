import { DirectionCardinal, Grid, NumberGrid, Position } from '../../types/grid.js';
import {
  DIRECTIONS_CARDINAL,
  getExploreDirectionsCardinal,
  getGridValue,
  setGridValue,
  updatePositionCardinal,
} from '../../utils/grid.js';

const findNextDirection = (grid: Grid, directions: DirectionCardinal[], start: Position) => {
  for (const direction of directions) {
    const position = updatePositionCardinal(start, direction);
    const value = getGridValue(grid, position);

    if (value !== '#') {
      return direction;
    }
  }

  return null;
};

const tryCheats = (grid: Grid, startPosition: Position, distancesGrid: NumberGrid, cheats: Map<number, number>) => {
  for (const direction of DIRECTIONS_CARDINAL) {
    let newPosition = updatePositionCardinal(startPosition, direction);
    let value = getGridValue(grid, newPosition);
    if (value !== '#') {
      continue;
    }

    newPosition = updatePositionCardinal(newPosition, direction);
    value = getGridValue(grid, newPosition);
    if (value !== '.' && value !== 'E') {
      continue;
    }

    const prevDistance = getGridValue(distancesGrid, startPosition) as number;
    const newDistance = getGridValue(distancesGrid, newPosition) as number;

    const moveCost = 2;
    const savedTime = prevDistance - newDistance - moveCost;
    if (savedTime <= 0) {
      continue;
    }

    const amount = cheats.get(savedTime) || 0;
    cheats.set(savedTime, amount + 1);
  }
};

const findCheats = (grid: Grid, start: Position, distancesGrid: NumberGrid) => {
  const cheats = new Map<number, number>();
  tryCheats(grid, start, distancesGrid, cheats);

  let position: Position = start;
  let direction: DirectionCardinal = findNextDirection(grid, DIRECTIONS_CARDINAL, position);

  while (true) {
    const newPosition = updatePositionCardinal(position, direction);
    const value = getGridValue(grid, newPosition);
    if (value === 'E') {
      break;
    }

    tryCheats(grid, newPosition, distancesGrid, cheats);

    const exploreDirections = getExploreDirectionsCardinal(direction);
    direction = findNextDirection(grid, exploreDirections, newPosition);
    position = newPosition;
  }

  return cheats;
};

const findDistances = (grid: Grid, end: Position) => {
  const distancesGrid: NumberGrid = grid.map((row) => row.map(() => Infinity));
  distancesGrid[end.y][end.x] = 0;

  let moves = 1;
  let position: Position = end;
  let direction: DirectionCardinal = findNextDirection(grid, DIRECTIONS_CARDINAL, position);

  while (true) {
    const newPosition = updatePositionCardinal(position, direction);
    const value = getGridValue(grid, newPosition);
    setGridValue(distancesGrid, newPosition, moves);

    if (value === 'S') {
      break;
    }

    const exploreDirections = getExploreDirectionsCardinal(direction);
    direction = findNextDirection(grid, exploreDirections, newPosition);
    moves++;
    position = newPosition;
  }

  return distancesGrid;
};

const solvePart1 = (grid: Grid, start: Position, end: Position) => {
  const distancesGrid = findDistances(grid, end);
  const cheats = findCheats(grid, start, distancesGrid);

  let sum = 0;
  for (const [savedTime, amount] of cheats) {
    if (savedTime >= 100) {
      sum += amount;
    }
  }

  return sum;
};

export default solvePart1;
