const hasChiefsComputer = (cycle: string[]) => {
  return cycle.some((node) => node[0] === 't');
};

const findCycles = (nodes: Map<string, Set<string>>) => {
  const cycles = new Set<string>();
  for (const [firstNode, connectedNodes] of nodes) {
    for (const secondNode of connectedNodes) {
      for (const thirdNode of nodes.get(secondNode)) {
        const isConnectedToFirst = nodes.get(thirdNode).has(firstNode);
        if (!isConnectedToFirst) {
          continue;
        }

        const newCycle = [firstNode, secondNode, thirdNode];
        if (!hasChiefsComputer(newCycle)) {
          continue;
        }

        const key = newCycle.sort().join(',');
        cycles.add(key);
      }
    }
  }

  return cycles;
};

const solvePart1 = (nodes: Map<string, Set<string>>) => {
  const cycles = findCycles(nodes);
  return cycles.size;
};

export default solvePart1;
