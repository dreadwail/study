import { Node } from 'support/trees';

const traversePreOrder = (node: Node<T>): Node<T> | null => {};

const traversePostOrder = (node: Node<T>): Node<T> | null => {};

export const isTreeSymmetric = <T>(node: Node<T>): boolean => {
  let leftPtr: Node<T> | null = node;
  let rightPtr: Node<T> | null = node;

  while (leftPtr && rightPtr) {
    if (leftPtr.value !== rightPtr.value) {
      return false;
    }

    leftPtr = traversePreOrder(leftPtr);
    rightPtr = traversePostOrder(rightPtr);
  }

  if ((!leftPtr && rightPtr) || (leftPtr && !rightPtr)) {
    return false;
  }

  return true;
};
