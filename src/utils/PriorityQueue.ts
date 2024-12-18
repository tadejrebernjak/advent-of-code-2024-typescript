export default class PriorityQueue<T> {
  private compare: (a: T, b: T) => number;
  private heap: Array<T>;

  constructor(compareFunction: (a: T, b: T) => number) {
    this.compare = compareFunction;
    this.heap = [];
  }

  private bubbleUp(index: number) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.compare(this.heap[index], this.heap[parentIndex]) >= 0) {
        break;
      }

      [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
      index = parentIndex;
    }
  }

  private bubbleDown(index: number) {
    const length = this.heap.length;
    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let smallest = index;

      if (leftChildIndex < length && this.compare(this.heap[leftChildIndex], this.heap[smallest]) < 0) {
        smallest = leftChildIndex;
      }

      if (rightChildIndex < length && this.compare(this.heap[rightChildIndex], this.heap[smallest]) < 0) {
        smallest = rightChildIndex;
      }

      if (smallest === index) {
        break;
      }

      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      index = smallest;
    }
  }

  public isEmpty() {
    return this.heap.length === 0;
  }

  public add(item: T) {
    this.heap.push(item);
    this.bubbleUp(this.heap.length - 1);
  }

  public take() {
    if (this.isEmpty()) {
      return null;
    }
    const root = this.heap[0];
    const last = this.heap.pop();

    if (!this.isEmpty()) {
      this.heap[0] = last;
      this.bubbleDown(0);
    }

    return root;
  }
}
