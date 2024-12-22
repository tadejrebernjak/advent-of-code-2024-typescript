import { mod } from '../../utils/number.js';

const mix = (secret: number, number: number) => {
  return secret ^ number;
};

const prune = (secret: number) => {
  return mod(secret, 16777216);
};

const generateSecret = (secret: number) => {
  secret = mix(secret, secret * 64);
  secret = prune(secret);

  secret = mix(secret, Math.floor(secret / 32));
  secret = prune(secret);

  secret = mix(secret, secret * 2048);
  secret = prune(secret);

  return secret;
};

const solvePart1 = (initialSecrets: number[], generations: number) => {
  let sum = 0;
  for (let secret of initialSecrets) {
    for (let i = 0; i < generations; i++) {
      secret = generateSecret(secret);
    }

    sum += secret;
  }

  return sum;
};

export default solvePart1;
