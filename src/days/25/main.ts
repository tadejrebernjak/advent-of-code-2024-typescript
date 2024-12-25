import { Answer, Input } from '../../types/base.js';
import solvePart1 from './part1.js';

const parseSchematic = (schematic: string[], parsingLock: boolean, output: number[][]) => {
  const mechanism: number[] = Array(schematic[0].length).fill(-1);

  for (let y = 0; y < schematic.length; y++) {
    const row = parsingLock ? schematic[y] : schematic[schematic.length - 1 - y];
    for (let i = 0; i < row.length; i++) {
      if (mechanism[i] !== -1) {
        continue;
      }

      if (row[i] !== '.') {
        continue;
      }

      mechanism[i] = y - 1;
    }
  }

  output.push(mechanism);
};

const parseInput = (input: Input) => {
  const locks: number[][] = [];
  const keys: number[][] = [];

  const schematics = input
    .join('\n')
    .split('\n\n')
    .map((schematicString) => schematicString.split('\n'));

  for (const schematic of schematics) {
    const parsingLock = schematic[0] === '#####';
    if (parsingLock) {
      parseSchematic(schematic, parsingLock, locks);
      continue;
    }

    parseSchematic(schematic, parsingLock, keys);
  }

  return { locks, keys };
};

const main = (input: Input): Answer => {
  const { locks, keys } = parseInput(input);

  const part1 = solvePart1(locks, keys);

  return {
    part1,
    part2: 0,
  };
};

export default main;
