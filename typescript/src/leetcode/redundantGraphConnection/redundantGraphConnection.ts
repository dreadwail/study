export const findRedundantConnection = (edges: [number, number][]): [number, number] => {
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
