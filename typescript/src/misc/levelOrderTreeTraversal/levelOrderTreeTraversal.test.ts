import { Node } from 'support/trees';
import { levelOrderTreeTraversal } from './levelOrderTreeTraversal';

describe('levelOrderTreeTraversal', () => {
  it('returns an array with a single root element for a tree with only 1 node', () => {
    const root = new Node(10);

    expect(levelOrderTreeTraversal(root)).toEqual([10]);
  });

  it('returns an array with level order entries for a tree with one level', () => {
    const root = new Node(10, new Node(5), new Node(15));

    expect(levelOrderTreeTraversal(root)).toEqual([10, 5, 15]);
  });

  it('returns an array with level order entries for a multi-level tree', () => {
    const root = new Node(10, new Node(5, new Node(3), new Node(7)), new Node(15, new Node(12), new Node(16)));

    expect(levelOrderTreeTraversal(root)).toEqual([10, 5, 15, 3, 7, 12, 16]);
  });

  it('returns an array with level order entries for a multi-level imbalanced tree', () => {
    const root = new Node(10, new Node(5, new Node(3)), new Node(15, new Node(12), new Node(16)));

    expect(levelOrderTreeTraversal(root)).toEqual([10, 5, 15, 3, 12, 16]);
  });
});
