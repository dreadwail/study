export const findRedundantConnectionDFS = (edges: [number, number][]): [number, number] => {
  const connectedTo: Record<number, Set<number>> = {};

  const touch = (x: number) => {
    connectedTo[x] = connectedTo[x] ?? new Set<number>();
  };

  const connect = (first: number, second: number) => {
    connectedTo[first].add(second);
    connectedTo[second].add(first);
  };

  const isConnectedTo = (first: number, second: number, visited: Set<number>): boolean => {
    if (first === second) {
      return true;
    }

    touch(first);
    touch(second);

    for (const connection of connectedTo[first]) {
      if (visited.has(connection)) {
        continue;
      }
      visited.add(connection);
      if (isConnectedTo(connection, second, visited)) {
        return true;
      }
    }

    return false;
  };

  const redundants: [number, number][] = [];

  for (let i = 0; i < edges.length; i += 1) {
    const [first, second] = edges[i];

    if (isConnectedTo(first, second, new Set<number>())) {
      redundants.push([first, second]);
    }
    connect(first, second);
  }

  return redundants[redundants.length - 1];
};

export const findRedundantConnectionUnionFind = (edges: [number, number][]): [number, number] => {
  const sets: Record<number, Set<number>> = {};
  const redundants: [number, number][] = [];

  for (let edgeIndex = 0; edgeIndex < edges.length; edgeIndex += 1) {
    const [first, second] = edges[edgeIndex];

    const firstSet = sets[first];
    const secondSet = sets[second];

    if (!firstSet && !secondSet) {
      const newSet = new Set<number>();
      newSet.add(first);
      newSet.add(second);

      sets[first] = newSet;
      sets[second] = newSet;
    } else if (firstSet === secondSet) {
      redundants.push([first, second]);
    } else if (firstSet && secondSet) {
      const firstSet = sets[first];
      const secondSet = sets[second];

      for (const entry of secondSet) {
        firstSet.add(entry);
        sets[entry] = firstSet;
      }
      sets[second] = firstSet;
    } else if (firstSet) {
      sets[first].add(second);
      sets[second] = sets[first];
    } else {
      sets[second].add(first);
      sets[first] = sets[second];
    }
  }

  return redundants[redundants.length - 1];
};
