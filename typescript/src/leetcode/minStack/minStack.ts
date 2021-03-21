export class MinStack {
  private minIndex: number;
  private storage: number[];

  constructor() {
    this.minIndex = 0;
    this.storage = [];
  }

  push(toPush: number): void {
    this.storage.push(toPush);
    const currentMin = this.storage[this.minIndex];
    if (toPush < currentMin) {
      this.minIndex = this.storage.length - 1;
    }
  }

  pop(): void {
    if (this.storage.length === 0) {
      throw new Error('Cannot pop an empty stack.');
    }
    if (this.minIndex === this.storage.length - 1) {
      let newMinIndex = 0;
      for (let i = 0; i < this.storage.length - 1; i += 1) {
        if (this.storage[i] <= this.storage[newMinIndex]) {
          newMinIndex = i;
        }
      }
      this.minIndex = newMinIndex;
    }
    this.storage.pop();
  }

  top(): number {
    if (this.storage.length === 0) {
      throw new Error('Cannot pop an empty stack.');
    }
    return this.storage[this.storage.length - 1];
  }

  getMin(): number {
    if (this.storage.length === 0) {
      throw new Error('Cannot pop an empty stack.');
    }
    return this.storage[this.minIndex];
  }

  toArray(): number[] {
    return [...this.storage];
  }
}
