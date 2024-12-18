const calculateDistance = (a: number, b: number) => {
  return Math.abs(a - b);
};

const solvePart1 = (leftList: number[], rightList: number[]) => {
  const totalDistance = leftList.reduce((sum, leftValue, index) => {
    const rightValue = rightList[index];
    const distance = calculateDistance(leftValue, rightValue);

    return sum + distance;
  }, 0);

  return totalDistance;
};

export default solvePart1;
