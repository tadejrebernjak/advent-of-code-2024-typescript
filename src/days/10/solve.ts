import { DirectionCardinal, NumberGrid, Position } from '../../types/grid.js';
import { DIRECTIONS_CARDINAL, getGridValue, positionsInclude, updatePositionCardinal } from '../../utils/grid.js';
import { Trailhead } from './types.js';

const developTrail = (
  grid: NumberGrid,
  previousPosition: Position,
  previousValue: number,
  direction: DirectionCardinal,
  visitedPositions: Position[],
  peaks: Position[],
  desiredResult: keyof Trailhead,
) => {
  if (desiredResult === 'rating') {
    visitedPositions = [...visitedPositions];
  }

  const newPosition = updatePositionCardinal(previousPosition, direction);
  const value = getGridValue(grid, newPosition);
  if (value !== previousValue + 1) {
    return;
  }

  if (positionsInclude(visitedPositions, newPosition)) {
    return;
  }

  visitedPositions.push(newPosition);

  if (value === 9) {
    peaks.push(newPosition);
    return;
  }

  for (const exploreDirection of DIRECTIONS_CARDINAL) {
    developTrail(grid, newPosition, value, exploreDirection, visitedPositions, peaks, desiredResult);
  }
};

const findTrailhead = (grid: NumberGrid, start: Position) => {
  const visitedPositions = [start];
  const peaksGlobal = [];
  const peaksLocal = [];

  for (const exploreDirection of DIRECTIONS_CARDINAL) {
    developTrail(grid, start, 0, exploreDirection, visitedPositions, peaksGlobal, 'score');
    developTrail(grid, start, 0, exploreDirection, [start], peaksLocal, 'rating');
  }

  return { score: peaksGlobal.length, rating: peaksLocal.length };
};

const findTrailheads = (grid: NumberGrid) => {
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

export default findTrailheads;
