import { Grid, Position } from '../../types/grid.js';
import { DIRECTIONS_CARDINAL, getGridValue, updatePositionCardinal } from '../../utils/grid.js';
import { Region } from './types.js';

const getPlotPerimeter = (grid: Grid, position: Position) => {
  const type = getGridValue(grid, position);

  let perimeter = 0;
  for (const direction of DIRECTIONS_CARDINAL) {
    const newPosition = updatePositionCardinal(position, direction);
    const neighbourType = getGridValue(grid, newPosition);

    if (neighbourType !== type) {
      perimeter++;
    }
  }

  return perimeter;
};

const findRegionPerimeter = (grid: Grid, { plots }: Region) => {
  return plots.reduce((perimeter, plot) => perimeter + getPlotPerimeter(grid, plot), 0);
};

const solvePart1 = (grid: Grid, regions: Region[]) => {
  return regions.reduce((sum, region) => sum + region.plots.length * findRegionPerimeter(grid, region), 0);
};

export default solvePart1;
