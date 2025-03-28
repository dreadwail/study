type Key = string;
type Timestamp = number;

type Datum<T> = {
  value: T;
  timestamp: Timestamp;
};

type Storage<T> = {
  [key: Key]: Datum<T>[] | undefined;
};

const binarySearch = <T>(
  data: Datum<T>[],
  timestamp: number,
  leftIndex: number = 0,
  rightIndex: number = data.length - 1
): number => {
  if (leftIndex >= rightIndex) {
    return leftIndex;
  }
  const partitionIndex = Math.floor((leftIndex + rightIndex) / 2);
  const partitionElement = data[partitionIndex];

  if (partitionElement.timestamp > timestamp) {
    return binarySearch(data, timestamp, leftIndex, partitionIndex - 1);
  }
  if (partitionElement.timestamp < timestamp) {
    return binarySearch(data, timestamp, partitionIndex + 1, rightIndex);
  }
  return partitionIndex;
};

export class TimeMap<T> {
  private storage: Storage<T>;

  constructor() {
    this.storage = {};
  }

  set(key: string, value: T, timestamp: number): void {
    const datum: Datum<T> = { value, timestamp };

    const data = this.storage[key] ?? [];

    if (data.length === 0) {
      data.splice(0, 0, datum);
    } else {
      const index = binarySearch(data, timestamp);
      data.splice(index + 1, 0, datum);
    }

    this.storage[key] = data;
  }

  get(key: string, timestampToFetch: number): T | undefined {
    const data = this.storage[key] ?? [];

    if (data.length === 0) {
      return undefined;
    }

    const index = binarySearch(data, timestampToFetch);

    const datum = data[index];
    return datum.value;
  }
}
