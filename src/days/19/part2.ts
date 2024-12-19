import { towelFits } from './utils.js';

const buildDesign = (design: string, index: number, towels: string[], DP: Map<number, number>) => {
  if (index >= design.length) {
    return 1;
  }

  if (DP.has(index)) {
    return DP.get(index);
  }

  const fittingTowels = towels.filter((towel) => towelFits(design, index, towel));
  const finishedRecursions = fittingTowels.map((towel) => buildDesign(design, index + towel.length, towels, DP));
  const combinations = finishedRecursions.reduce((sum: number, result: number) => sum + result, 0);

  DP.set(index, combinations);
  return combinations;
};

const getDesignCombinations = (design: string, towels: string[]) => {
  return buildDesign(design, 0, towels, new Map());
};

const solvePart2 = (towels: string[], designs: string[]) => {
  const designCombinations = designs.map((design) => getDesignCombinations(design, towels));
  return designCombinations.reduce((sum, combinations) => sum + combinations, 0);
};

export default solvePart2;
