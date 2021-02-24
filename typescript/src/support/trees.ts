import { NonEmptyArray } from './types';

export class Node<T> {
  value: T;
  left: Node<T> | null;
  right: Node<T> | null;

  constructor(value: T, left: Node<T> | null = null, right: Node<T> | null = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  add(value: T): void {
    let current: Node<T> | undefined | null = this;

    const newNode = new Node(value);

    while (current) {
      if (value < current.value) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = newNode;
          return;
        }
      } else {
        if (current.right) {
          current = current.right;
        } else {
          current.right = newNode;
          return;
        }
      }
    }
  }
}

export const arrayToTree = <T>(input: NonEmptyArray<T>): Node<T> => {
  const root = new Node(input[0]);

  for (let i = 1; i < input.length; i += 1) {
    const value = input[i];
    root.add(value);
  }

  return root;
};

export enum TraversalType {
  INORDER,
  PREORDER,
  POSTORDER,
}

const treeToArrayPreOrder = <T>(tree: Node<T>): T[] => {
  const result: T[] = [];

  let current: Node<T> | null | undefined = tree;
  const stack: Node<T>[] = [];

  while (current || stack.length > 0) {
    if (current) {
      result.push(current.value);
      stack.push(current);
      current = current.left;
    } else {
      current = stack.pop();
      current = current!.right;
    }
  }

  return result;
};

export const treeToArray = <T>(tree: Node<T>, traversalType: TraversalType = TraversalType.PREORDER): T[] => {
  switch (traversalType) {
    case TraversalType.INORDER:
      return [];
    case TraversalType.POSTORDER:
      return [];
    case TraversalType.PREORDER:
    default:
      return treeToArrayPreOrder(tree);
  }
};
