import { DirectionCardinal, DirectionOrdinal, Grid, NumberGrid, Position } from '../types/grid.js';

export const DIRECTIONS_ORDINAL: DirectionOrdinal[] = [
  'up',
  'up_right',
  'right',
  'down_right',
  'down',
  'down_left',
  'left',
  'up_left',
];

export const DIRECTIONS_CARDINAL: DirectionCardinal[] = ['^', '>', 'v', '<'];

export const copyGrid = (grid: Grid) => {
  return grid.map((row) => row.slice());
};

export const isInBounds = (grid: Grid | NumberGrid, { x, y }: Position) => {
  return y >= 0 && y < grid.length && x >= 0 && x < grid[y].length;
};

export const getGridValue = (grid: Grid | NumberGrid, { x, y }: Position) => {
  return isInBounds(grid, { x, y }) ? grid[y][x] : null;
};

export const setGridValue = (grid: Grid | NumberGrid, { x, y }: Position, value: any) => {
  if (!isInBounds(grid, { x, y })) {
    return;
  }

  grid[y][x] = value;
};

export const updatePositionOrdinal = ({ x, y }: Position, direction: DirectionOrdinal, offset?: number): Position => {
  offset = offset || 1;

  if (direction.includes('left')) {
    x -= offset;
  }
  if (direction.includes('right')) {
    x += offset;
  }
  if (direction.includes('down')) {
    y += offset;
  }
  if (direction.includes('up')) {
    y -= offset;
  }

  return { x, y };
};

export const updatePositionCardinal = ({ x, y }: Position, direction: DirectionCardinal): Position => {
  if (direction === '^') y--;
  if (direction === '>') x++;
  if (direction === 'v') y++;
  if (direction === '<') x--;

  return { x, y };
};

export const positionsInclude = (positions: Position[], { x, y }: Position) => {
  return positions.some((pos) => pos.x === x && pos.y === y);
};

export const getNewDirectionCardinal = (direction: DirectionCardinal, turn: number) => {
  const currentIndex = DIRECTIONS_CARDINAL.indexOf(direction);

  let newIndex = (currentIndex + turn) % DIRECTIONS_CARDINAL.length;
  if (newIndex < 0) {
    newIndex = DIRECTIONS_CARDINAL.length + newIndex;
  }

  return DIRECTIONS_CARDINAL[newIndex];
};

export const getOppositeDirectionCardinal = (direction: DirectionCardinal) => {
  const directionIndex = DIRECTIONS_CARDINAL.indexOf(direction);
  const oppositeIndex = (directionIndex + DIRECTIONS_CARDINAL.length / 2) % DIRECTIONS_CARDINAL.length;

  return DIRECTIONS_CARDINAL[oppositeIndex];
};

export const getExploreDirectionsCardinal = (direction: DirectionCardinal) => {
  const backwardsDirection = getOppositeDirectionCardinal(direction);
  return DIRECTIONS_CARDINAL.filter((direction) => direction !== backwardsDirection);
};
