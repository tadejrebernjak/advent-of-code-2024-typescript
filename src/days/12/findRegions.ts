import { DirectionCardinal, Grid, Position } from '../../types/grid.js';
import { DIRECTIONS_CARDINAL, getGridValue, positionsInclude, updatePositionCardinal } from '../../utils/grid.js';
import { Region } from './types.js';

const isAlreadyGrouped = (regions: Region[], { x, y }: Position) => {
  return regions.some(({ plots }) => plots.some((plot) => plot.x === x && plot.y === y));
};

const exploreRegion = (grid: Grid, region: Region, position: Position, direction: DirectionCardinal) => {
  const newPosition = updatePositionCardinal(position, direction);

  const value = getGridValue(grid, newPosition);
  if (value !== region.type) {
    return;
  }

  if (positionsInclude(region.plots, newPosition)) {
    return;
  }

  region.plots.push(newPosition);

  for (const exploreDirection of DIRECTIONS_CARDINAL) {
    exploreRegion(grid, region, newPosition, exploreDirection);
  }
};

const findRegion = (grid: Grid, position: Position) => {
  const type = getGridValue(grid, position) as string;
  const region: Region = {
    type,
    plots: [position],
  };

  for (const exploreDirection of DIRECTIONS_CARDINAL) {
    exploreRegion(grid, region, position, exploreDirection);
  }

  return region;
};

const findRegions = (grid: Grid) => {
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

export default findRegions;
