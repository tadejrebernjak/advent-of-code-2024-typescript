import { NodeDijkstra } from '../../types/dijkstra.js';
import { DirectionCardinal, Grid, Position } from '../../types/grid.js';
import PriorityQueue from '../../utils/PriorityQueue.js';
import { getGridValue, getNewDirectionCardinal, updatePositionCardinal } from '../../utils/grid.js';

type Turn = 0 | -1 | 1 | 2;
const TURNS: Turn[] = [0, -1, 1, 2];

const dijkstra = (grid: Grid, start: Position): number => {
  const startDirection: DirectionCardinal = '>';

  const queue = new PriorityQueue<NodeDijkstra>((a, b) => a.cost - b.cost);
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
      const newDirection = getNewDirectionCardinal(direction, turn);
      const newPosition = updatePositionCardinal(position, newDirection);
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
