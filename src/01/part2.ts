const getNumberOfOccurences = (number: number, list: number[]) => {
  let occurences = 0;

  for (const listNumber of list) {
    if (number === listNumber) {
      occurences++;
    }

    if (number < listNumber) {
      break;
    }
  }

  return occurences;
};

const solvePart2 = (leftList: number[], rightList: number[]) => {
  let similarityScore = 0;

  for (const number of leftList) {
    const occurences = getNumberOfOccurences(number, rightList);
    similarityScore += number * occurences;
  }

  return similarityScore;
};

export default solvePart2;
