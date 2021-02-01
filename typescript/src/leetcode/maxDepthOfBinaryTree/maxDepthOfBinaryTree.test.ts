import { getMaxDepth, TreeNode } from './maxDepthOfBinaryTree';

describe('getMaxDepth', () => {
  it('can get the max depth of the sample input', () => {
    const tree = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));

    expect(getMaxDepth(tree)).toEqual(3);
  });

  it('correctly handles an empty tree', () => {
    expect(getMaxDepth(null)).toEqual(0);
  });

  it('correctly handles a single node tree', () => {
    expect(getMaxDepth(new TreeNode(0))).toEqual(1);
  });
});
