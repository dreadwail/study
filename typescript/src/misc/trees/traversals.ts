import { Node } from 'support/trees';

export const traversePreOrderRecursive = <T>(tree: Node<T>): T[] => {
  const result: T[] = [tree.value];
  if (tree.left) {
    result.push(...traversePreOrderRecursive(tree.left));
  }
  if (tree.right) {
    result.push(...traversePreOrderRecursive(tree.right));
  }
  return result;
};

export const traversePreOrderIterative = <T>(tree: Node<T>): T[] => {
  const result: T[] = [];
  const stack: Node<T>[] = [];

  let current: Node<T> | null = tree;

  while (current || stack.length > 0) {
    if (current) {
      result.push(current.value);
      stack.push(current);
      current = current.left;
    } else {
      current = stack.pop() as Node<T>;
      current = current.right;
    }
  }

  return result;
};

export const traverseInOrderRecursive = <T>(tree: Node<T>): T[] => {
  const result: T[] = [];
  if (tree.left) {
    result.push(...traverseInOrderRecursive(tree.left));
  }
  result.push(tree.value);
  if (tree.right) {
    result.push(...traverseInOrderRecursive(tree.right));
  }
  return result;
};

export const traverseInOrderIterative = <T>(tree: Node<T>): T[] => {
  const result: T[] = [];
  const stack: Node<T>[] = [];

  let current: Node<T> | null = tree;

  while (current || stack.length > 0) {
    if (current) {
      stack.push(current);
      current = current.left;
    } else {
      current = stack.pop() as Node<T>;
      result.push(current.value);
      current = current.right;
    }
  }

  return result;
};

export const traversePostOrderRecursive = <T>(tree: Node<T>): T[] => {
  const result: T[] = [];
  if (tree.left) {
    result.push(...traversePostOrderRecursive(tree.left));
  }
  if (tree.right) {
    result.push(...traversePostOrderRecursive(tree.right));
  }
  result.push(tree.value);
  return result;
};

export const traversePostOrderIterative = <T>(tree: Node<T>): T[] => {
  const result: T[] = [];
  const stack: Node<T>[] = [tree];

  while (stack.length > 0) {
    const current = stack.pop() as Node<T>;
    result.push(current.value);

    if (current.left) {
      stack.push(current.left);
    }
    if (current.right) {
      stack.push(current.right);
    }
  }

  return result.reverse();
};
