import { Answer, Input } from '../../types/base.js';
import solvePart1 from './part1.js';
import solvePart2 from './part2.js';
import { ClawMachine } from './types.js';

const REGEX_X = /X[+=](\d+)/g;
const REGEX_Y = /Y[+=](\d+)/g;

const extractMachineLines = (combinedLine: string) => {
  const machine = [];
  for (const line of combinedLine.split('\n')) {
    const [matchX] = line.match(REGEX_X);
    const [matchY] = line.match(REGEX_Y);

    const button = {
      x: +matchX.slice(2),
      y: +matchY.slice(2),
    };

    machine.push(button);
  }

  return machine;
};

const parseInput = (input: Input) => {
  const combinedLines = input.join('\n').split('\n\n');
  const clawMachines: ClawMachine[] = [];

  for (const line of combinedLines) {
    const [buttonA, buttonB, prize] = extractMachineLines(line);
    buttonA.cost = 3;
    buttonB.cost = 1;
    clawMachines.push({ buttonA, buttonB, prize });
  }

  return clawMachines;
};

const main = (input: Input): Answer => {
  const clawMachines = parseInput(input);

  const part1 = solvePart1(clawMachines);
  const part2 = solvePart2(clawMachines);

  return {
    part1,
    part2,
  };
};

export default main;
