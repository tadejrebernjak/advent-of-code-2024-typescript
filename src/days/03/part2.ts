import { MUL_REGEX, calculateSum } from './utils.js';

const DO_REGEX = /do\(\)/g;
const DONT_REGEX = /don't\(\)/g;

const findValidSegments = (input: string) => {
  const validSegments = [];

  const dos = [...input.matchAll(DO_REGEX)];
  const donts = [...input.matchAll(DONT_REGEX)];

  let currentIndex = 0;
  for (const dont of donts) {
    if (dont.index > currentIndex) {
      validSegments.push(input.slice(currentIndex, dont.index));
    }

    const nextDo = dos.find((match) => match.index > dont.index);
    if (!nextDo) {
      currentIndex = input.length;
      break;
    }

    currentIndex = nextDo.index;
  }

  if (currentIndex < input.length) {
    validSegments.push(input.slice(currentIndex));
  }

  return validSegments;
};

const solvePart2 = (input: string) => {
  const validSegments = findValidSegments(input);
  const validInput = validSegments.join('');

  const instructions = [...validInput.matchAll(MUL_REGEX)];
  return calculateSum(instructions);
};

export default solvePart2;
