import { Answer, Input } from '../../types/base.js';
import solvePart1 from './part1.js';
import { Program } from './types.js';

const parseInput = (input: Input) => {
  const [lineA, lineB, lineC, _, instructionsLine] = input;

  const A = +lineA.split(' ').pop();
  const B = +lineB.split(' ').pop();
  const C = +lineC.split(' ').pop();

  const instructions = instructionsLine
    .split(' ')
    .pop()
    .split(',')
    .map((str) => +str);

  return { A, B, C, instructions, pointer: 0 };
};

const main = (input: Input): Answer => {
  const program: Program = parseInput(input);

  const part1 = solvePart1(program);

  return {
    part1,
    part2: 0,
  };
};

export default main;
