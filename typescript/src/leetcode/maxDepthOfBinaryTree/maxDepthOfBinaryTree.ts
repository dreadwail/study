import { Node } from 'support/trees';

export const getMaxDepth = (root: Node<number> | null): number => {
  if (!root) {
    return 0;
  }
  return Math.max(1 + getMaxDepth(root.left), 1 + getMaxDepth(root.right));
};
