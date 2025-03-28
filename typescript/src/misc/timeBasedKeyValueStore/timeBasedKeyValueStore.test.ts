import { TimeMap } from './timeBasedKeyValueStore';

describe('TimeMap', () => {
  it('returns undefined if there is no value stored', () => {
    const timeMap = new TimeMap();

    const value = timeMap.get('foo', 1);
    expect(value).toBeUndefined();
  });

  it('returns values stored at a given timestamp', () => {
    const timeMap = new TimeMap();
    timeMap.set('foo', 'bar', 1);

    const value = timeMap.get('foo', 1);
    expect(value).toEqual('bar');
  });

  it('returns values stored after a given timestamp', () => {
    const timeMap = new TimeMap();
    timeMap.set('foo', 'bar', 1);

    const value = timeMap.get('foo', 3);
    expect(value).toEqual('bar');
  });

  it('returns the value stored at the first timestamp when there are multiple values at the key', () => {
    const timeMap = new TimeMap();
    timeMap.set('foo', 'bar', 1);
    timeMap.set('foo', 'bar2', 4);

    const value = timeMap.get('foo', 1);
    expect(value).toEqual('bar');
  });

  it('return the value stored at a subsequent timestamp when there are multiple values at the key', () => {
    const timeMap = new TimeMap();
    timeMap.set('foo', 'bar', 1);
    timeMap.set('foo', 'bar2', 4);

    const value = timeMap.get('foo', 4);
    expect(value).toEqual('bar2');
  });

  it('return the value stored after a timestamp when there are multiple values at the key', () => {
    const timeMap = new TimeMap();
    timeMap.set('foo', 'bar', 1);
    timeMap.set('foo', 'bar2', 4);

    const value = timeMap.get('foo', 5);
    expect(value).toEqual('bar2');
  });
});
