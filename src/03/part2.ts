import { MUL_REGEX, calculateSum } from './utils.js';

const DO_REGEX = /do\(\)/g;
const DONT_REGEX = /don't\(\)/g;

const findValidSegments = (instructionsInput: string) => {
  const validSegments = [];

  const dos = [...instructionsInput.matchAll(DO_REGEX)];
  const donts = [...instructionsInput.matchAll(DONT_REGEX)];

  let currentIndex = 0;

  for (const dont of donts) {
    if (dont.index > currentIndex) {
      validSegments.push(instructionsInput.slice(currentIndex, dont.index));
    }

    const nextDo = dos.find((match) => match.index > dont.index);
    if (!nextDo) {
      currentIndex = instructionsInput.length;
      break;
    }

    currentIndex = nextDo.index;
  }

  if (currentIndex < instructionsInput.length) {
    validSegments.push(instructionsInput.slice(currentIndex));
  }

  return validSegments;
};

const solvePart2 = (instructionsInput: string) => {
  const validSegments = findValidSegments(instructionsInput);
  const validInput = validSegments.join('');

  const instructions = [...validInput.matchAll(MUL_REGEX)];
  const result = calculateSum(instructions);

  return result;
};

export default solvePart2;
