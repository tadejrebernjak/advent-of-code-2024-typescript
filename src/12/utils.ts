import { Direction, Grid, Position, Region } from './types.js';

export const DIRECTIONS: Direction[] = ['up', 'right', 'down', 'left'];

const inBounds = (grid: Grid, x: number, y: number) => {
  return y >= 0 && y < grid.length && x >= 0 && x < grid[y].length;
};

export const getGridValue = (grid: Grid, { x, y }: Position) => {
  return inBounds(grid, x, y) ? grid[y][x] : null;
};

export const updatePosition = ({ x, y }: Position, direction: Direction) => {
  if (direction === 'up') y--;
  if (direction === 'right') x++;
  if (direction === 'down') y++;
  if (direction === 'left') x--;

  return { x, y };
};

const alreadyVisited = (visitedPositions: Position[], { x, y }: Position) => {
  return visitedPositions.some((pos) => pos.x === x && pos.y === y);
};

const isAlreadyGrouped = (regions: Region[], { x, y }: Position) => {
  return regions.some(({ plots }) => plots.some((plot) => plot.x === x && plot.y === y));
};

const exploreRegion = (grid: Grid, region: Region, position: Position, direction: Direction) => {
  const newPosition = updatePosition(position, direction);

  const value = getGridValue(grid, newPosition);
  if (value !== region.type) {
    return;
  }

  if (alreadyVisited(region.plots, newPosition)) {
    return;
  }

  region.plots.push(newPosition);

  for (const exploreDirection of DIRECTIONS) {
    exploreRegion(grid, region, newPosition, exploreDirection);
  }
};

const findRegion = (grid: Grid, position: Position) => {
  const type = getGridValue(grid, position);
  const region: Region = {
    type,
    plots: [position],
  };

  for (const exploreDirection of DIRECTIONS) {
    exploreRegion(grid, region, position, exploreDirection);
  }

  return region;
};

export const findRegions = (grid: Grid) => {
  const regions: Region[] = [];

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (isAlreadyGrouped(regions, { x, y })) {
        continue;
      }

      const newRegion = findRegion(grid, { x, y });
      regions.push(newRegion);
    }
  }

  return regions;
};
