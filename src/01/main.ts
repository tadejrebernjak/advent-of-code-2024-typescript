import solvePart1 from './part1.js';
import solvePart2 from './part2.js';

const parseInput = (lines: string[]) => {
  const leftList: number[] = [];
  const rightList: number[] = [];

  lines.forEach((line) => {
    const [leftNumber, rightNumber] = line.split('   ');

    leftList.push(parseInt(leftNumber));
    rightList.push(parseInt(rightNumber));
  });

  return { leftList, rightList };
};

const main = (lines: string[]) => {
  const { leftList, rightList } = parseInput(lines);

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
