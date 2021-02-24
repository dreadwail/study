import { NonEmptyArray } from './types';

export class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T, next: Node<T> | null = null) {
    this.value = value;
    this.next = next;
  }
}

export const listToArray = <T>(node: Node<T>): T[] => {
  const out: T[] = [];
  let current: Node<T> | null = node;

  while (current) {
    out.push(current.value);
    current = current.next;
  }

  return out;
};

export const arrayToList = <T>(values: NonEmptyArray<T>): Node<T> => {
  const nodes = values.map((value) => new Node(value));
  nodes.forEach((node, index, allNodes) => {
    const next = allNodes[index + 1];
    node.next = next;
  });
  return nodes[0];
};
