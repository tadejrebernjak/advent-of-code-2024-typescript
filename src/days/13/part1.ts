import { Position } from '../../types/grid.js';
import { ClawMachine } from './types.js';

const isOverPrize = (prize: Position, { x, y }: Position) => {
  return prize.x < x || prize.y < y;
};

const isOnPrize = (prize: Position, { x, y }: Position) => {
  return prize.x === x && prize.y === y;
};

const getMinimumTokens = ({ buttonA, buttonB, prize }: ClawMachine) => {
  let minCost = Infinity;
  for (let a = 0; a <= 100; a++) {
    for (let b = 0; b <= 100; b++) {
      const x = a * buttonA.x + b * buttonB.x;
      const y = a * buttonA.y + b * buttonB.y;
      const position = { x, y };

      if (isOverPrize(prize, position)) {
        break;
      }

      if (isOnPrize(prize, position)) {
        const cost = a * buttonA.cost + b * buttonB.cost;
        minCost = Math.min(minCost, cost);
      }
    }
  }

  return minCost === Infinity ? 0 : minCost;
};

const solvePart1 = (clawMachines: ClawMachine[]) => {
  return clawMachines.reduce((sum, machine) => sum + getMinimumTokens(machine), 0);
};

export default solvePart1;
