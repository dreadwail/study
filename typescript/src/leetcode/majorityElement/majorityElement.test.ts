import { findMajorityElement } from './majorityElement';

describe('majorityElement', () => {
  it('finds the majority element in the first sample data', () => {
    expect(findMajorityElement([3, 2, 3])).toEqual(3);
  });

  it('finds the majority element in the second sample data', () => {
    expect(findMajorityElement([2, 2, 1, 1, 1, 2, 2])).toEqual(2);
  });

  it('returns undefined when there is no majority element', () => {
    expect(findMajorityElement([3, 2, 1])).toBeUndefined();
  });
});
