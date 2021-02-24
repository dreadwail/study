import { Node } from 'support/trees';
import { isTreeSymmetric } from './isTreeSymmetric';

describe('isTreeSymmetric', () => {
  it('returns the correct answer for example 1', () => {
    const tree = new Node(1, new Node(2, new Node(3), new Node(4)), new Node(2, new Node(4), new Node(3)));

    expect(isTreeSymmetric(tree)).toBe(true);
  });
});
