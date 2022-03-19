import { Node, Value } from 'support/graphs';

export const traverseBreadthFirst = <T extends Value>(root: Node<T>): T[] => {
  const toVisit: Node<T>[] = [root];
  const visited = new Set<T>();
  const traversal: T[] = [];

  while (toVisit.length > 0) {
    const popped = toVisit.pop() as Node<T>;
    if (visited.has(popped.value)) {
      continue;
    }

    visited.add(popped.value);
    traversal.push(popped.value);

    for (const key in popped.connections) {
      const node = popped.connections[key];
      if (node) {
        const thing: Node<T> = node;
        toVisit.push(thing);
      }
    }
  }

  return traversal;
};

const traverseDepthFirstRecursive = <T extends Value>(node: Node<T>, visited: Set<T>): T[] => {
  if (visited.has(node.value)) {
    return [];
  }

  const result: T[] = [node.value];

  for (const key in node.connections) {
    const keyNode = node.connections[key];
    if (keyNode) {
      result.push(...traverseDepthFirstRecursive(keyNode, visited));
    }
  }

  return result;
};

export const traverseDepthFirst = <T extends Value>(root: Node<T>): T[] => {
  const visited = new Set<T>();
  return traverseDepthFirstRecursive(root, visited);
};
