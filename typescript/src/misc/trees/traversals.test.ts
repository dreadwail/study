import { Node } from 'support/trees';
import {
  traversePreOrderRecursive,
  traversePreOrderIterative,
  traverseInOrderRecursive,
  traverseInOrderIterative,
  traversePostOrderRecursive,
  traversePostOrderIterative,
} from './traversals';

const fullTree = new Node(10, new Node(5, new Node(2), new Node(7)), new Node(12, new Node(11), new Node(14)));
const singleElementTree = new Node(10);
const imbalancedTree = new Node(10, new Node(5, new Node(2), new Node(7)), new Node(12));
const imbalancedTreeNoRight = new Node(10, new Node(5, new Node(2), new Node(7)), new Node(12, new Node(11)));
const imbalancedTreeNoLeft = new Node(10, new Node(5, new Node(2), new Node(7)), new Node(12, null, new Node(14)));

const testCases: Record<string, Node<number>> = {
  fullTree,
  singleElementTree,
  imbalancedTree,
  imbalancedTreeNoRight,
  imbalancedTreeNoLeft,
};

describe.each([traversePreOrderRecursive, traversePreOrderIterative])('%p', (traversal) => {
  it.each([
    [[10, 5, 2, 7, 12, 11, 14], 'fullTree'],
    [[10], 'singleElementTree'],
    [[10, 5, 2, 7, 12], 'imbalancedTree'],
    [[10, 5, 2, 7, 12, 11], 'imbalancedTreeNoRight'],
    [[10, 5, 2, 7, 12, 14], 'imbalancedTreeNoLeft'],
  ])('returns %p for tree %o', (expected, treeName) => {
    expect(traversal(testCases[treeName])).toEqual(expected);
  });
});

describe.each([traverseInOrderRecursive, traverseInOrderIterative])('%p', (traversal) => {
  it.each([
    [[2, 5, 7, 10, 11, 12, 14], 'fullTree'],
    [[10], 'singleElementTree'],
    [[2, 5, 7, 10, 12], 'imbalancedTree'],
    [[2, 5, 7, 10, 11, 12], 'imbalancedTreeNoRight'],
    [[2, 5, 7, 10, 12, 14], 'imbalancedTreeNoLeft'],
  ])('returns %p for tree %o', (expected, treeName) => {
    expect(traversal(testCases[treeName])).toEqual(expected);
  });
});

describe.each([traversePostOrderRecursive, traversePostOrderIterative])('%p', (traversal) => {
  it.each([
    [[2, 7, 5, 11, 14, 12, 10], 'fullTree'],
    [[10], 'singleElementTree'],
    [[2, 7, 5, 12, 10], 'imbalancedTree'],
    [[2, 7, 5, 11, 12, 10], 'imbalancedTreeNoRight'],
    [[2, 7, 5, 14, 12, 10], 'imbalancedTreeNoLeft'],
  ])('returns %p for tree %o', (expected, treeName) => {
    expect(traversal(testCases[treeName])).toEqual(expected);
  });
});
