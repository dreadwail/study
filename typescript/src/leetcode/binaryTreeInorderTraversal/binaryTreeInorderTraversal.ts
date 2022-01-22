import { Node } from 'support/trees';

export const inorderTraversalRecursive = (root: Node<number> | null): number[] => {
  if (!root) {
    return [];
  }

  const result: number[] = [];

  const leftResult = inorderTraversalRecursive(root.left);
  leftResult.forEach((value) => {
    result.push(value);
  });

  result.push(root.value);

  const rightResult = inorderTraversalRecursive(root.right);
  rightResult.forEach((value) => {
    result.push(value);
  });

  return result;
};

export const inorderTraversalIterative = (root: Node<number> | null): number[] => {
  if (!root) {
    return [];
  }

  const stack: Node<number>[] = [];
  const result: number[] = [];

  let current: Node<number> | null = root;

  while (stack.length > 0 || current) {
    if (!current) {
      current = stack.pop() as Node<number>;
      result.push(current.value);
      current = current.right;
    } else {
      stack.push(current);
      current = current.left;
    }
  }

  return result;
};
