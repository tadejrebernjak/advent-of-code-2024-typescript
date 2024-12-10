import { DesiredResult, Direction, Grid, Position, Trailhead } from './types.js';

const DIRECTIONS: Direction[] = ['up', 'right', 'down', 'left'];

const inBounds = (grid: Grid, x: number, y: number) => {
  return y >= 0 && y < grid.length && x >= 0 && x < grid[y].length;
};

const getGridValue = (grid: Grid, { x, y }: Position) => {
  return inBounds(grid, x, y) ? grid[y][x] : null;
};

const updatePosition = ({ x, y }: Position, direction: Direction) => {
  if (direction === 'up') y--;
  if (direction === 'right') x++;
  if (direction === 'down') y++;
  if (direction === 'left') x--;

  return { x, y };
};

const alreadyVisited = (visitedPositions: Position[], { x, y }: Position) => {
  return visitedPositions.some((pos) => pos.x === x && pos.y === y);
};

const developTrail = (
  grid: Grid,
  previousPosition: Position,
  previousValue: number,
  direction: Direction,
  visitedPositions: Position[],
  peaks: Position[],
  desiredResult: DesiredResult,
) => {
  if (desiredResult === 'rating') {
    visitedPositions = [...visitedPositions];
  }

  const newPosition = updatePosition(previousPosition, direction);
  const value = getGridValue(grid, newPosition);

  if (value !== previousValue + 1) {
    return;
  }

  if (alreadyVisited(visitedPositions, newPosition)) {
    return;
  }

  visitedPositions.push(newPosition);

  if (value === 9) {
    peaks.push(newPosition);
    return;
  }

  for (const exploreDirection of DIRECTIONS) {
    developTrail(grid, newPosition, value, exploreDirection, visitedPositions, peaks, desiredResult);
  }
};

const findTrailhead = (grid: Grid, start: Position) => {
  const visitedPositions = [start];
  const peaksGlobal = [];
  const peaksLocal = [];

  for (const exploreDirection of DIRECTIONS) {
    developTrail(grid, start, 0, exploreDirection, visitedPositions, peaksGlobal, 'score');
    developTrail(grid, start, 0, exploreDirection, [start], peaksLocal, 'rating');
  }

  return { score: peaksGlobal.length, rating: peaksLocal.length };
};

export const findTrailheads = (grid: Grid) => {
  const trailheads: Trailhead[] = [];

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      const value = getGridValue(grid, { x, y });
      if (value !== 0) {
        continue;
      }

      const trailhead = findTrailhead(grid, { x, y });
      trailheads.push(trailhead);
    }
  }

  return trailheads;
};
