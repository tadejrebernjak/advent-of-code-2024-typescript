import { Answer, Input } from '../../types/base.js';
import solvePart1 from './part1.js';
import solvePart2 from './part2.js';

const parseInput = (input: Input) => {
  const leftList: number[] = [];
  const rightList: number[] = [];

  for (const line of input) {
    const [leftNumber, rightNumber] = line.split('   ');

    leftList.push(+leftNumber);
    rightList.push(+rightNumber);
  }

  leftList.sort((a, b) => a - b);
  rightList.sort((a, b) => a - b);

  return { leftList, rightList };
};

const main = (input: Input): Answer => {
  const { leftList, rightList } = parseInput(input);

  const part1 = solvePart1(leftList, rightList);
  const part2 = solvePart2(leftList, rightList);

  return {
    part1,
    part2,
  };
};

export default main;
