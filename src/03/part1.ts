const REGEX = /mul\((\d{1,3}),(\d{1,3})\)/g;

const extractInstructions = (instructions: string) => {
  const matches = [...instructions.matchAll(REGEX)];

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

const solvePart1 = (instructionsInput: string) => {
  const instructions = extractInstructions(instructionsInput);
  const result = calculateSum(instructions);

  return result;
};

export default solvePart1;
