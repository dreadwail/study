class TreeNode {
  left: TreeNode | null;
  right: TreeNode | null;
  val: number;

  constructor(val: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val;
    this.left = left || null;
    this.right = right || null;
  }
}

export const levelOrderTraversal = (node: TreeNode | null): number[] => {
  if (!node) {
    return [];
  }

  const queue: TreeNode[] = [];
  const out: number[] = [];

  let current: TreeNode | null = node;
  queue.push(current);

  while (queue.length > 0) {
    current = queue.shift() || null;
    if (current) {
      out.push(current.val);

      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }

  return out;
};

type Partitioned = {
  midpointIndex: number;
  lefts: number[];
  rights: number[];
};

export const partition = (nums: number[]): Partitioned => {
  const midpointIndex = Math.floor(nums.length / 2);

  const lefts = nums.filter((_, index) => index < midpointIndex);
  const rights = nums.filter((_, index) => index > midpointIndex);

  return {
    midpointIndex,
    lefts,
    rights,
  };
};

const addBalanced = (parent: TreeNode, numsToInsert: number[]) => {
  if (numsToInsert.length === 0) {
    return;
  }

  const { midpointIndex, lefts, rights } = partition(numsToInsert);
  const midpointValue = numsToInsert[midpointIndex];

  if (midpointValue <= parent.val) {
    const newNode = new TreeNode(midpointValue);
    parent.left = newNode;
    addBalanced(newNode, lefts);
    addBalanced(newNode, rights);
  } else {
    const newNode = new TreeNode(midpointValue);
    parent.right = newNode;
    addBalanced(newNode, lefts);
    addBalanced(newNode, rights);
  }
};

export const sortedArrayToBST = (nums: number[]): TreeNode | null => {
  if (nums.length === 0) {
    return null;
  }

  const { midpointIndex, lefts, rights } = partition(nums);

  const midpointValue = nums[midpointIndex];
  const rootNode = new TreeNode(midpointValue);

  addBalanced(rootNode, lefts);
  addBalanced(rootNode, rights);

  return rootNode;
};
