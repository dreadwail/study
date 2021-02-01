export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export const getMaxDepth = (root: TreeNode | null): number => {
  if (!root) {
    return 0;
  }
  return Math.max(1 + getMaxDepth(root.left), 1 + getMaxDepth(root.right));
};
