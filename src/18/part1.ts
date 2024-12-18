import PriorityQueue from './PriorityQueue.js';
import { Grid, Node, Position } from './types.js';
import { DIRECTIONS, HEIGHT, WIDTH, getGridValue, isEnd, updatePosition } from './utils.js';

const dijkstra = (grid: Grid, start: Position): number => {
  const queue = new PriorityQueue<Node>((a, b) => a.cost - b.cost);
  for (const direction of DIRECTIONS) {
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

    for (const newDirection of DIRECTIONS) {
      const newPosition = updatePosition(position, direction);
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

const initializeGrid = (obstacles: Position[], amount: number) => {
  const grid: Grid = Array(HEIGHT)
    .fill(null)
    .map(() => Array(WIDTH).fill('.'));

  for (let i = 0; i < amount; i++) {
    const { x, y } = obstacles[i];
    grid[y][x] = '#';
  }

  return grid;
};

const solvePart1 = (obstacles: Position[], amount: number) => {
  const grid = initializeGrid(obstacles, amount);
  const start = { x: 0, y: 0 };

  return dijkstra(grid, start);
};

export default solvePart1;
