import { Node } from 'support/trees';
import { isSymmetric } from './symmetricTree';

describe('isSymmetric', () => {
  it('returns true for a symmetric tree', () => {
    const tree = new Node(1, new Node(2, new Node(3), new Node(4)), new Node(2, new Node(4), new Node(3)));

    expect(isSymmetric(tree)).toBe(true);
  });

  it('returns false for a non-symmetric tree', () => {
    const tree = new Node(1, new Node(2, null, new Node(3)), new Node(2, null, new Node(3)));

    expect(isSymmetric(tree)).toBe(false);
  });
});
