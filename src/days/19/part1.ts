import { towelFits } from './utils.js';

const buildDesign = (design: string, index: number, towels: string[], unfinishableIndexes: Set<number>) => {
  if (index >= design.length) {
    return true;
  }

  if (unfinishableIndexes.has(index)) {
    return false;
  }

  const fittingTowels = towels.filter((towel) => towelFits(design, index, towel));
  for (const towel of fittingTowels) {
    const canFinishDesign = buildDesign(design, index + towel.length, towels, unfinishableIndexes);
    if (canFinishDesign) {
      return true;
    }
  }

  unfinishableIndexes.add(index);
  return false;
};

const isDesignPossible = (design: string, towels: string[]) => {
  return buildDesign(design, 0, towels, new Set());
};

const solvePart1 = (towels: string[], designs: string[]) => {
  const possibleDesigns = designs.filter((design) => isDesignPossible(design, towels));
  return possibleDesigns.length;
};

export default solvePart1;
