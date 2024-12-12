import { Edge, Grid, Position, Region, UniqueEdge } from './types.js';
import { DIRECTIONS, getGridValue, updatePosition } from './utils.js';

const avg = (a: number, b: number) => {
  return (a + b) / 2;
};

const uniqueEdgeExists = (uniqueEdges: UniqueEdge[], edge: UniqueEdge) => {
  return uniqueEdges.some(({ axis, value, from }) => edge.axis === axis && edge.value === value && edge.from === from);
};

const areNeighbouringEdges = (a: Edge, b: Edge, axis: keyof Position) => {
  return Math.abs(a[axis] - b[axis]) === 1;
};

const findEdges = (grid: Grid, edges: Edge[], uniqueEdges: UniqueEdge[], position: Position) => {
  const type = getGridValue(grid, position);

  for (const direction of DIRECTIONS) {
    const newPosition = updatePosition(position, direction);
    const neighbourType = getGridValue(grid, newPosition);

    if (neighbourType === type) {
      continue;
    }

    const x = avg(position.x, newPosition.x);
    const y = avg(position.y, newPosition.y);
    const axis = x % 1 !== 0 ? 'x' : 'y';
    const from = position[axis];

    const edge = {
      x,
      y,
      from,
    };

    edges.push(edge);

    const value = edge[axis];
    if (!uniqueEdgeExists(uniqueEdges, { axis, from, value })) {
      uniqueEdges.push({ axis, from, value });
    }
  }
};

const groupEdges = (edges: Edge[], { axis, value, from }: UniqueEdge) => {
  const otherAxis = axis === 'x' ? 'y' : 'x';

  edges = edges.filter((edge) => edge[axis] === value && edge.from === from);
  edges.sort((a, b) => a[otherAxis] - b[otherAxis]);

  const groups = [];
  let currentGroup = [edges[0]];

  for (let i = 1; i < edges.length; i++) {
    const previous = edges[i - 1];
    const current = edges[i];

    if (areNeighbouringEdges(previous, current, otherAxis)) {
      currentGroup.push(current);
      continue;
    }

    groups.push([...currentGroup]);
    currentGroup = [current];
  }

  if (currentGroup.length > 0) {
    groups.push(currentGroup);
  }

  return groups.length;
};

const findRegionSides = (grid: Grid, { plots }: Region) => {
  const edges = [];
  const uniqueEdges = [];

  for (const plot of plots) {
    findEdges(grid, edges, uniqueEdges, plot);
  }

  let sides = 0;
  for (const uniqueEdge of uniqueEdges) {
    sides += groupEdges(edges, uniqueEdge);
  }

  return sides;
};

const solvePart2 = (grid: Grid, regions: Region[]) => {
  return regions.reduce((sum, region) => sum + region.plots.length * findRegionSides(grid, region), 0);
};

export default solvePart2;
