import { Node } from 'support/trees';
import { getMaxDepth } from './maxDepthOfBinaryTree';

describe('getMaxDepth', () => {
  it('can get the max depth of the sample input', () => {
    const tree = new Node(3, new Node(9), new Node(20, new Node(15), new Node(7)));

    expect(getMaxDepth(tree)).toEqual(3);
  });

  it('correctly handles an empty tree', () => {
    expect(getMaxDepth(null)).toEqual(0);
  });

  it('correctly handles a single node tree', () => {
    expect(getMaxDepth(new Node(0))).toEqual(1);
  });
});
