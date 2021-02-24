import { Node, TraversalType, treeToArray, arrayToTree } from './trees';

describe('tree Node', () => {
  describe('add', () => {
    it('correctly adds nodes smaller', () => {
      const tree = new Node(42);
      tree.add(10);

      if (!tree.left) {
        fail();
      } else {
        expect(tree.left.value).toEqual(10);
      }
    });

    it('correctly adds nodes larger', () => {
      const tree = new Node(42);
      tree.add(60);

      if (!tree.right) {
        fail();
      } else {
        expect(tree.right.value).toEqual(60);
      }
    });

    it('correctly adds nodes deeply', () => {
      const tree = new Node(42);
      tree.add(10);
      tree.add(20);

      if (!tree.left || !tree.left.right) {
        fail();
      }

      expect(tree.left.right.value).toEqual(20);
    });
  });
});

describe('arrayToTree', () => {
  it('builds the correct tree for a single item array', () => {
    const tree = arrayToTree([10]);
    const array = treeToArray(tree, TraversalType.PREORDER);
    expect(array).toEqual([10]);
  });

  it('should build the correct tree for the input array', () => {
    const tree = arrayToTree([10, 5, 15, 3, 7]);
    const array = treeToArray(tree, TraversalType.PREORDER);
    expect(array).toEqual([10, 5, 3, 7, 15]);
  });
});
