export const swap = (array: Array<any>, a: number, b: number) => {
  [array[a], array[b]] = [array[b], array[a]];
};

export const insertAt = (array: Array<any>, index: number, item: any) => {
  array.splice(index, 0, item);
};

export const removeAt = (array: Array<any>, index: number, amount: number = 1) => {
  array.splice(index, amount);
};
