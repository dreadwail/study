import { Node } from 'support/trees';

export const levelOrderTraversal = (node: Node<number> | null): number[] => {
  if (!node) {
    return [];
  }

  const queue: Node<number>[] = [];
  const out: number[] = [];

  let current: Node<number> | null = node;
  queue.push(current);

  while (queue.length > 0) {
    current = queue.shift() || null;
    if (current) {
      out.push(current.value);

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

const addBalanced = (parent: Node<number>, numsToInsert: number[]) => {
  if (numsToInsert.length === 0) {
    return;
  }

  const { midpointIndex, lefts, rights } = partition(numsToInsert);
  const midpointValue = numsToInsert[midpointIndex];

  if (midpointValue <= parent.value) {
    const newNode = new Node(midpointValue);
    parent.left = newNode;
    addBalanced(newNode, lefts);
    addBalanced(newNode, rights);
  } else {
    const newNode = new Node(midpointValue);
    parent.right = newNode;
    addBalanced(newNode, lefts);
    addBalanced(newNode, rights);
  }
};

export const sortedArrayToBST = (nums: number[]): Node<number> | null => {
  if (nums.length === 0) {
    return null;
  }

  const { midpointIndex, lefts, rights } = partition(nums);

  const midpointValue = nums[midpointIndex];
  const rootNode = new Node(midpointValue);

  addBalanced(rootNode, lefts);
  addBalanced(rootNode, rights);

  return rootNode;
};
