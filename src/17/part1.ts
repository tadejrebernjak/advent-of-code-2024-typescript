import { Program } from './types.js';

const combo = ({ A, B, C }: Program, operand: number) => {
  if (operand <= 3) {
    return operand;
  }

  const registers = [A, B, C];
  return registers[operand - 4];
};

const division = (program: Program, operand: number, register: 'A' | 'B' | 'C') => {
  const result = Math.floor(program.A / 2 ** combo(program, operand));
  program[register] = result;
};

const executeInstruction = (program: Program, output: string[]) => {
  const { A, B, C, instructions, pointer } = program;

  const instruction = instructions[pointer];
  const operand = instructions[pointer + 1];

  if (instruction === 0) {
    division(program, operand, 'A');
  } else if (instruction === 1) {
    program.B = B ^ operand;
  } else if (instruction === 2) {
    program.B = combo(program, operand) % 8;
  } else if (instruction === 3 && A != 0) {
    program.pointer = operand - 2;
  } else if (instruction === 4) {
    program.B = B ^ C;
  } else if (instruction === 5) {
    const result = combo(program, operand) % 8;
    output.push(result.toString());
  } else if (instruction === 6) {
    division(program, operand, 'B');
  } else if (instruction === 7) {
    division(program, operand, 'C');
  }

  program.pointer += 2;
};

const solvePart1 = (program: Program) => {
  const output = [];
  while (program.pointer < program.instructions.length) {
    executeInstruction(program, output);
  }

  return output.join(',');
};

export default solvePart1;
