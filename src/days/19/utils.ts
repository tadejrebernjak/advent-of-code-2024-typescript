export const towelFits = (design: string, startIndex: number, towel: string) => {
  const endIndex = startIndex + towel.length;
  const designSegment = design.slice(startIndex, endIndex);

  return designSegment === towel;
};
