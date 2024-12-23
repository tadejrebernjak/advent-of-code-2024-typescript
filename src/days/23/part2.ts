const getSetKey = (set: Set<string>) => {
  const array = Array.from(set).sort();
  return array.join(',');
};

const nodeConnectsToEntireSet = (nodes: Map<string, Set<string>>, newNode: string, set: Set<string>) => {
  const connectedNodes = nodes.get(newNode);
  for (const node of set) {
    if (!connectedNodes.has(node)) {
      return false;
    }
  }

  return true;
};

const getLargestSet = (sets: Set<string>) => {
  let largestSet = '';
  for (const set of sets) {
    if (set.length > largestSet.length) {
      largestSet = set;
    }
  }

  return largestSet;
};

const findSets = (
  nodes: Map<string, Set<string>>,
  currentNode: string,
  allSets: Set<string>,
  currentSet: Set<string>,
) => {
  const key = getSetKey(currentSet);
  if (allSets.has(key)) {
    return;
  }

  allSets.add(key);

  const neighbours = nodes.get(currentNode);
  for (const neighbour of neighbours) {
    if (currentSet.has(neighbour)) {
      continue;
    }

    if (!nodeConnectsToEntireSet(nodes, neighbour, currentSet)) {
      continue;
    }

    findSets(nodes, neighbour, allSets, new Set([...currentSet, neighbour]));
  }
};

const solvePart2 = (nodes: Map<string, Set<string>>) => {
  const sets = new Set<string>();
  for (const [node, _] of nodes) {
    const currentSet = new Set([node]);
    findSets(nodes, node, sets, currentSet);
  }

  return getLargestSet(sets);
};

export default solvePart2;
