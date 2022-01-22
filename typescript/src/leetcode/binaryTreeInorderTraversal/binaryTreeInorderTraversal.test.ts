import { Node } from 'support/trees';
import { inorderTraversalRecursive, inorderTraversalIterative } from './binaryTreeInorderTraversal';

type TestInput = (number | null)[];
type TestOutput = number[];
type TestCase = [TestInput, TestOutput];
type TestCases = TestCase[];

const toTestTree = (values: TestInput): Node<number> | null => {
  const valuesClone = [...values];

  const rootNumber = valuesClone.shift();
  if (!rootNumber) {
    return null;
  }
  const tree = new Node(rootNumber);

  let toAddTo = tree;
  while (valuesClone.length > 0) {
    const toAddLeft = valuesClone.shift();
    const toAddRight = valuesClone.shift();
    if (toAddLeft != null) {
      toAddTo.left = new Node(toAddLeft);
    }
    if (toAddRight != null) {
      toAddTo.right = new Node(toAddRight);
    }

    if (toAddTo.left != null) {
      toAddTo = toAddTo.left;
    } else if (toAddTo.right != null) {
      toAddTo = toAddTo.right;
    } else {
      throw new Error('illegal state');
    }
  }

  return tree;
};

const testCases: TestCases = [
  [
    [1, null, 2, 3],
    [1, 3, 2],
  ],
  [[], []],
  [[1], [1]],
];

describe.each([inorderTraversalRecursive, inorderTraversalIterative])('%p', (func) => {
  it.each(testCases)('given tree %p it returns %p', (input, expectedOutput) => {
    const tree = toTestTree(input);
    expect(func(tree)).toEqual(expectedOutput);
  });
});
