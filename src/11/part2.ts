import { isEvenLength, splitStone } from './utils.js';

const processStone = (stone: number) => {
  if (stone === 0) {
    return [1];
  }

  if (isEvenLength(stone)) {
    return splitStone(stone);
  }

  return [stone * 2024];
};

const updateMapKey = (map: Map<number, number>, key: number, value: number) => {
  const prevValue = map.get(key) || 0;
  map.set(key, prevValue + value);
};

const processStones = (frequenciesMap: Map<number, number>) => {
  const updatedMap = new Map();

  for (const [key, frequency] of frequenciesMap) {
    const result: number[] = processStone(key);

    for (const stone of result) {
      updateMapKey(updatedMap, stone, frequency);
    }
  }

  return updatedMap;
};

const createFrequenciesMap = (stones: number[]) => {
  const map = new Map<number, number>();

  for (const stone of stones) {
    updateMapKey(map, stone, 1);
  }

  return map;
};

const solvePart2 = (stones: number[], numBlinks: number) => {
  let frequenciesMap = createFrequenciesMap(stones);

  for (let i = 0; i < numBlinks; i++) {
    frequenciesMap = processStones(frequenciesMap);
  }

  let sum = 0;
  for (const [_, value] of frequenciesMap) {
    sum += value;
  }

  return sum;
};

export default solvePart2;
