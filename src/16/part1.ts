import PriorityQueue from './PriorityQueue.js';
import { Direction, Grid, Node, Position, Turn } from './types.js';
import { DIRECTIONS, TURNS, getGridValue, updatePosition } from './utils.js';

const getNewDirection = (direction: Direction, turn: Turn) => {
  const currentIndex = DIRECTIONS.findIndex((value) => value === direction);

  let newIndex = (currentIndex + turn) % DIRECTIONS.length;
  if (newIndex < 0) {
    newIndex = DIRECTIONS.length + newIndex;
  }

  return DIRECTIONS[newIndex];
};

const dijkstra = (grid: Grid, start: Position): number => {
  const startDirection: Direction = '>';

  const queue = new PriorityQueue<Node>((a, b) => a.cost - b.cost);
  queue.add({ position: start, cost: 0, direction: startDirection });

  const visited = new Set();

  while (!queue.isEmpty()) {
    const { position, cost, direction } = queue.take();
    const positionKey = `${position.x},${position.y},${direction}`;

    if (visited.has(positionKey)) {
      continue;
    }
    visited.add(positionKey);

    const value = getGridValue(grid, position);

    if (value === 'E') {
      return cost;
    }

    if (value === '#') {
      continue;
    }

    for (const turn of TURNS) {
      const turnCost = Math.abs(turn * 1000);
      const newDirection = getNewDirection(direction, turn);
      const newPosition = updatePosition(position, newDirection);
      const newCost = cost + 1 + turnCost;

      const newPositionKey = `${newPosition.x},${newPosition.y},${newDirection}`;

      if (visited.has(newPositionKey)) {
        continue;
      }

      queue.add({ position: newPosition, cost: newCost, direction: newDirection });
    }
  }

  return Infinity;
};

const solvePart1 = (grid: Grid, start: Position) => {
  return dijkstra(grid, start);
};

export default solvePart1;
