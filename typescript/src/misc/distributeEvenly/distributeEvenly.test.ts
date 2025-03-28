import { distributeEvenly } from './distributeEvenly';

describe('distributeEvenly', () => {
  it('distributes nothing is there is no money in the pool', () => {
    const result = distributeEvenly(0, { a: 10, b: 10, c: 10, d: 10 });
    expect(result).toEqual({ a: 0, b: 0, c: 0, d: 0 });
  });

  it('evenly distributes funds from the available pool when there are insufficient funds', () => {
    const result = distributeEvenly(38, { a: 10, b: 10, c: 10, d: 10 });
    expect(result).toEqual({ a: 10, b: 10, c: 9, d: 9 });
  });

  it('evenly distributes funds from the available pool when there are sufficient funds', () => {
    const result = distributeEvenly(40, { a: 10, b: 10, c: 10, d: 10 });
    expect(result).toEqual({ a: 10, b: 10, c: 10, d: 10 });
  });

  it('evenly distributes funds from the available pool when there are more than sufficient funds', () => {
    const result = distributeEvenly(50, { a: 10, b: 10, c: 10, d: 10 });
    expect(result).toEqual({ a: 10, b: 10, c: 10, d: 10 });
  });
});
