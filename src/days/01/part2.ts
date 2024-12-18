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
  const similarityScoreSum = leftList.reduce((similarityScore, number) => {
    const occurences = getNumberOfOccurences(number, rightList);
    return similarityScore + number * occurences;
  }, 0);

  return similarityScoreSum;
};

export default solvePart2;
