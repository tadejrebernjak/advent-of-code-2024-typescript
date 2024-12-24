import { removeAt } from '../../utils/array.js';
import { Operation, Register } from './types.js';

const executeOperation = (registers: Map<string, number>, { register1, register2, operator }: Operation) => {
  const r1 = registers.get(register1);
  const r2 = registers.get(register2);

  if (r1 === undefined || r2 === undefined) {
    return null;
  }

  if (operator === 'AND') {
    return r1 & r2;
  }

  if (operator === 'OR') {
    return r1 | r2;
  }

  return r1 ^ r2;
};

const executeOperations = (registers: Map<string, number>, operationsQueue: Operation[]) => {
  while (operationsQueue.length > 0) {
    for (let i = operationsQueue.length - 1; i >= 0; i--) {
      const operation = operationsQueue[i];

      const result = executeOperation(registers, operation);
      if (result === null) {
        continue;
      }

      registers.set(operation.target, result);
      removeAt(operationsQueue, i);
    }
  }
};

const getSortedRegistersArray = (registers: Map<string, number>) => {
  const registersArray: Register[] = [];
  for (const [register, value] of registers) {
    registersArray.push({ register, value });
  }

  registersArray.sort((a, b) => a.register.localeCompare(b.register));
  return registersArray;
};

const buildDecimalNumber = (registers: Register[]) => {
  let number = BigInt(0);
  for (const { value } of registers.reverse()) {
    number = (number << BigInt(1)) | BigInt(value);
  }

  return Number(number);
};

const solvePart1 = (registers: Map<string, number>, operationsQueue: Operation[]) => {
  executeOperations(registers, operationsQueue);

  const registersArray = getSortedRegistersArray(registers);
  const zRegisters = registersArray.filter(({ register }) => register[0] === 'z');

  return buildDecimalNumber(zRegisters);
};

export default solvePart1;
