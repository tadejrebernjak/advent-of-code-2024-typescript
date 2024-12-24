import { Answer, Input } from '../../types/base.js';
import solvePart1 from './part1.js';
import { LogicalOperator, Operation } from './types.js';

const parseInput = (input: Input) => {
  const emptyLineIndex = input.indexOf('');
  const registersInput = input.slice(0, emptyLineIndex);
  const queueInput = input.slice(emptyLineIndex + 1);

  const registers = new Map<string, number>();
  for (const line of registersInput) {
    const [register, value] = line.split(': ');
    registers.set(register, +value);
  }

  const operationsQueue: Operation[] = [];
  for (const line of queueInput) {
    const [register1, operator, register2, _, target] = line.split(' ');
    operationsQueue.push({
      register1,
      register2,
      operator: operator as LogicalOperator,
      target,
    });
  }

  return { registers, operationsQueue };
};

const main = (input: Input): Answer => {
  const { registers, operationsQueue } = parseInput(input);

  const part1 = solvePart1(registers, operationsQueue);

  return {
    part1,
    part2: 0,
  };
};

export default main;
