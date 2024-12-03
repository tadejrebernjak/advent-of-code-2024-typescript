const MUL_REGEX = /mul\((\d{1,3}),(\d{1,3})\)/g;
const DO_REGEX = /do\(\)/g;
const DONT_REGEX = /don't\(\)/g;

const extractInstructions = (instructions: string) => {
  const matches = [...instructions.matchAll(MUL_REGEX)];

  return matches;
};

const calculateSum = (instructions: RegExpMatchArray[]) => {
  let sum = 0;

  for (const instruction of instructions) {
    const firstNumber = parseInt(instruction[1]);
    const secondNumber = parseInt(instruction[2]);

    sum += firstNumber * secondNumber;
  }

  return sum;
};

const findValidSegments = (instructionsInput: string) => {
  const enabledSegments = [];

  const dos = [...instructionsInput.matchAll(DO_REGEX)];
  const donts = [...instructionsInput.matchAll(DONT_REGEX)];

  let currentIndex = 0;

  for (const dont of donts) {
    if (dont.index > currentIndex) {
      enabledSegments.push(instructionsInput.slice(currentIndex, dont.index));
    }

    const nextDo = dos.find((match) => match.index > dont.index);
    if (!nextDo) {
      currentIndex = instructionsInput.length;
      break;
    }

    currentIndex = nextDo.index;
  }

  if (currentIndex < instructionsInput.length) {
    enabledSegments.push(instructionsInput.slice(currentIndex));
  }

  return enabledSegments;
};

const solvePart2 = (instructionsInput: string) => {
  const validSegments = findValidSegments(instructionsInput);
  const validInput = validSegments.join('');

  const instructions = extractInstructions(validInput);
  const result = calculateSum(instructions);

  return result;
};

export default solvePart2;
