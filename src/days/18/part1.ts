import { NodeDijkstra } from '../../types/dijkstra.js';
import { Grid, Position } from '../../types/grid.js';
import PriorityQueue from '../../utils/PriorityQueue.js';
import { DIRECTIONS_CARDINAL, getGridValue, setGridValue, updatePositionCardinal } from '../../utils/grid.js';

const WIDTH = 71;
const HEIGHT = 71;

const isEnd = ({ x, y }: Position) => {
  return x === WIDTH - 1 && y === HEIGHT - 1;
};

const dijkstra = (grid: Grid, start: Position): number => {
  const queue = new PriorityQueue<NodeDijkstra>((a, b) => a.cost - b.cost);
  for (const direction of DIRECTIONS_CARDINAL) {
    queue.add({ position: start, cost: 0, direction });
  }

  const visited = new Set();

  while (!queue.isEmpty()) {
    const { position, cost, direction } = queue.take();
    const positionKey = `${position.x},${position.y},${direction}`;

    if (visited.has(positionKey)) {
      continue;
    }
    visited.add(positionKey);

    if (isEnd(position)) {
      return cost;
    }

    const value = getGridValue(grid, position);
    if (value === null || value === '#') {
      continue;
    }

    for (const newDirection of DIRECTIONS_CARDINAL) {
      const newPosition = updatePositionCardinal(position, direction);
      const newCost = cost + 1;

      const newPositionKey = `${newPosition.x},${newPosition.y},${newDirection}`;
      if (visited.has(newPositionKey)) {
        continue;
      }

      queue.add({ position: newPosition, cost: newCost, direction: newDirection });
    }
  }

  return Infinity;
};

const initializeGrid = (bytes: Position[], amount: number) => {
  const grid: Grid = Array(HEIGHT)
    .fill(null)
    .map(() => Array(WIDTH).fill('.'));

  for (let i = 0; i < amount; i++) {
    const position = bytes[i];
    setGridValue(grid, position, '#');
  }

  return grid;
};

const solvePart1 = (bytes: Position[], amount: number) => {
  const grid = initializeGrid(bytes, amount);
  const start = { x: 0, y: 0 };

  return dijkstra(grid, start);
};

export default solvePart1;
