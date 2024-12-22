export const avg = (a: number, b: number) => {
  return (a + b) / 2;
};

export const isInteger = (num: number) => {
  return num % 1 === 0;
};

export const mod = (number: number, mod: number) => {
  return ((number % mod) + mod) % mod;
};
