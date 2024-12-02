const solvePart1 = (leftList: number[], rightList: number[]) => {
  let differencesSum = 0;

  for (const i in leftList) {
    differencesSum += Math.abs(leftList[i] - rightList[i]);
  }

  return differencesSum;
};

export default solvePart1;
