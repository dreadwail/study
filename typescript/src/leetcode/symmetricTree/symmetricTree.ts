import { Node } from 'support/trees';

const traverseLeftFirst = <T>(node: Node<T>): (T | null)[] => {
  const visited: (T | null)[] = [node.value];

  if (node.left) {
    visited.push(...traverseLeftFirst(node.left));
  } else {
    visited.push(null);
  }

  if (node.right) {
    visited.push(...traverseLeftFirst(node.right));
  } else {
    visited.push(null);
  }

  return visited;
};

const traverseRightFirst = <T>(node: Node<T>): (T | null)[] => {
  const visited: (T | null)[] = [node.value];

  if (node.right) {
    visited.push(...traverseRightFirst(node.right));
  } else {
    visited.push(null);
  }

  if (node.left) {
    visited.push(...traverseRightFirst(node.left));
  } else {
    visited.push(null);
  }

  return visited;
};

export const isSymmetric = <T>(root: Node<T> | null): boolean => {
  if (!root) {
    return true;
  }

  const leftVisited = root.left ? traverseLeftFirst(root.left) : [];
  const rightVisited = root.right ? traverseRightFirst(root.right) : [];

  if (leftVisited.length !== rightVisited.length) {
    return false;
  }

  return leftVisited.every((value, index) => rightVisited[index] === value);
};
