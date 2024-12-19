import { Answer, Input } from '../../types/base.js';
import solvePart1 from './part1.js';
import solvePart2 from './part2.js';

const parseInput = (input: Input) => {
  const towels = input[0].split(', ');
  const designs = input.slice(2);

  return { towels, designs };
};

const main = (input: Input): Answer => {
  const { towels, designs } = parseInput(input);

  const part1 = solvePart1(towels, designs);
  const part2 = solvePart2(towels, designs);

  return {
    part1,
    part2,
  };
};

export default main;
