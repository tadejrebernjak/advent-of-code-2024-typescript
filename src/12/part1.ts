import { Grid, Position, Region } from './types.js';
import { DIRECTIONS, getGridValue, updatePosition } from './utils.js';

const getPlotPerimeter = (grid: Grid, position: Position) => {
  const type = getGridValue(grid, position);

  let perimeter = 0;
  for (const direction of DIRECTIONS) {
    const newPosition = updatePosition(position, direction);
    const neighbourType = getGridValue(grid, newPosition);

    if (neighbourType !== type) {
      perimeter++;
    }
  }

  return perimeter;
};

const findRegionPerimeter = (grid: Grid, { plots }: Region) => {
  let perimeter = 0;
  for (const plot of plots) {
    perimeter += getPlotPerimeter(grid, plot);
  }

  return perimeter;
};

const solvePart1 = (grid: Grid, regions: Region[]) => {
  return regions.reduce((sum, region) => sum + region.plots.length * findRegionPerimeter(grid, region), 0);
};

export default solvePart1;
