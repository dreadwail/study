import { levelOrderTraversal, partition, sortedArrayToBST } from './balancedTree';

describe('partition', () => {
  it('correctly identifies the midpoint', () => {
    expect(partition([0, 1, 2, 3, 4, 5])).toEqual(
      expect.objectContaining({
        midpointIndex: 3,
      })
    );
  });

  it('correctly dispenses the values to the left of midpoint', () => {
    expect(partition([0, 1, 2, 3, 4, 5])).toEqual(expect.objectContaining({ lefts: [0, 1, 2] }));
  });

  it('correctly dispenses the values to the right of midpoint', () => {
    expect(partition([0, 1, 2, 3, 4, 5])).toEqual(expect.objectContaining({ rights: [4, 5] }));
  });
});

describe('sortedArrayToBST', () => {
  it('correctly balances the sample input', () => {
    const input = [0, 1, 2, 3, 4, 5];
    const rootNode = sortedArrayToBST(input);
    const values = levelOrderTraversal(rootNode);
    expect(values).toEqual([3, 1, 5, 0, 2, 4]);
  });

  it('correctly balances more complex trees', () => {
    const input = [-93, -89, -85, -76, -56, -53, -20, -10, 20, 28, 41, 50, 66, 70, 87, 88, 91, 94];
    const rootNode = sortedArrayToBST(input);
    const values = levelOrderTraversal(rootNode);
    expect(values).toEqual([28, -56, 87, -85, -10, 66, 91, -89, -76, -20, 20, 50, 70, 88, 94, -93, -53, 41]);
  });
});
