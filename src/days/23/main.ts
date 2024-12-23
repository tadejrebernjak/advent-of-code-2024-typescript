import { Answer, Input } from '../../types/base.js';
import solvePart1 from './part1.js';
import solvePart2 from './part2.js';

const addNode = (nodes: Map<string, Set<string>>, node: string) => {
  if (nodes.has(node)) {
    return;
  }
  nodes.set(node, new Set());
};

const parseInput = (input: Input) => {
  const connections = input.map((line) => line.split('-'));
  const nodes = new Map<string, Set<string>>();

  for (const connection of connections) {
    const [left, right] = connection;

    addNode(nodes, left);
    addNode(nodes, right);

    nodes.get(left).add(right);
    nodes.get(right).add(left);
  }

  return nodes;
};

const main = (input: Input): Answer => {
  const nodes = parseInput(input);

  const part1 = solvePart1(nodes);
  const part2 = solvePart2(nodes);

  return {
    part1,
    part2,
  };
};

export default main;
