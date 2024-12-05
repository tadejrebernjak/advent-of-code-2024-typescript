import { Answer, Input } from '../baseTypes.js';
import solvePart1 from './part1.js';
import solvePart2 from './part2.js';

const parseInput = (input: Input) => {
  const leftList: number[] = [];
  const rightList: number[] = [];

  input.forEach((line) => {
    const [leftNumber, rightNumber] = line.split('   ');

    leftList.push(parseInt(leftNumber));
    rightList.push(parseInt(rightNumber));
  });

  return { leftList, rightList };
};

const main = (input: Input): Answer => {
  const { leftList, rightList } = parseInput(input);

  leftList.sort((a, b) => a - b);
  rightList.sort((a, b) => a - b);

  const part1 = solvePart1(leftList, rightList);
  const part2 = solvePart2(leftList, rightList);

  return {
    part1,
    part2,
  };
};

export default main;
