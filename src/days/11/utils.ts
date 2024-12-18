export const isEvenLength = (stone: number) => {
  const str = stone.toString();
  return str.length % 2 === 0;
};

export const splitStone = (stone: number) => {
  const str = stone.toString();

  const mid = str.length / 2;
  const left = str.slice(0, mid);
  const right = str.slice(mid);

  return [+left, +right];
};
