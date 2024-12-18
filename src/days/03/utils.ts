export const MUL_REGEX = /mul\((\d{1,3}),(\d{1,3})\)/g;

export const calculateSum = (instructions: RegExpMatchArray[]) => {
  return instructions.reduce((sum, instruction) => {
    const [_, firstNumber, secondNumber] = instruction;
    return sum + +firstNumber * +secondNumber;
  }, 0);
};
