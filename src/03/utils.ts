export const MUL_REGEX = /mul\((\d{1,3}),(\d{1,3})\)/g;

export const calculateSum = (instructions: RegExpMatchArray[]) => {
  let sum = 0;

  for (const instruction of instructions) {
    const firstNumber = parseInt(instruction[1]);
    const secondNumber = parseInt(instruction[2]);

    sum += firstNumber * secondNumber;
  }

  return sum;
};
