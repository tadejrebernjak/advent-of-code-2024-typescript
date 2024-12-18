import { isInteger } from '../../utils/number.js';
import { ClawMachine } from './types.js';

const getMinimumTokens = ({ buttonA, buttonB, prize }: ClawMachine) => {
  // Linear algebra:
  // ax, ay = buttonA
  // bx, by = buttonB
  // px, py = prize
  //
  // ax * aPresses + bx * bPresses = px   | * by
  // ay * aPresses + by * bPresses = py   | * bx
  //
  // by * ax * aPresses + by * bx * bPresses = px * by
  // bx * ay * aPresses + bx * by * bPresses = py * bx   | -
  //
  // by * ax * aPresses - bx * ay * aPresses = px * by - py * bx
  // aPresses * (by * ax - bx * ay) = px * by - py * bx
  // -> aPresses = (px * by - py * bx) / (by * ax - bx * ay)
  //
  // ax * aPresses + bx * bPresses = px
  // bx * bPresses = px - ax * aPresses
  // -> bPresses = (px - ax * aPresses) / bx

  const aPresses = (prize.x * buttonB.y - prize.y * buttonB.x) / (buttonB.y * buttonA.x - buttonB.x * buttonA.y);
  const bPresses = (prize.x - buttonA.x * aPresses) / buttonB.x;

  if (!isInteger(aPresses) || !isInteger(bPresses)) {
    return 0;
  }

  return aPresses * buttonA.cost + bPresses * buttonB.cost;
};

const solvePart2 = (clawMachines: ClawMachine[]) => {
  for (const machine of clawMachines) {
    machine.prize.x += 10000000000000;
    machine.prize.y += 10000000000000;
  }

  return clawMachines.reduce((sum, machine) => sum + getMinimumTokens(machine), 0);
};

export default solvePart2;
