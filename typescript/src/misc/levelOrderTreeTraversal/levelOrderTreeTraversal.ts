import { Node } from 'support/trees';

const levelOrderTreeTraversalRecursive = <T>(node: Node<T>, level: number, valuesAt: Record<number, T[]>): void => {
  const valuesThisLevel = valuesAt[level] ?? [];
  valuesThisLevel.push(node.value);
  valuesAt[level] = valuesThisLevel;

  if (node.left) {
    levelOrderTreeTraversalRecursive(node.left, level + 1, valuesAt);
  }
  if (node.right) {
    levelOrderTreeTraversalRecursive(node.right, level + 1, valuesAt);
  }
};

export const levelOrderTreeTraversal = <T>(root: Node<T>): T[] => {
  const valuesAt: Record<number, T[]> = [];
  levelOrderTreeTraversalRecursive(root, 0, valuesAt);
  return Object.values(valuesAt).flat();
};
