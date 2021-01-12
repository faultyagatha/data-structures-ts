/** FIFO (first in first out) data structure */

interface IQueue<T> {
  enqueue(el: T): void;
  dequeue(): T | undefined;
  size(): number;
}

export class Queue<T> implements IQueue<T> {
  private storage: T[] = [];

  constructor(private capacity: number = Infinity) { }

  enqueue(el: T): void {
    if (this.size() === this.capacity) {
      throw new Error("Queue has reached max capacity");
    }
    this.storage.push(el);
  }

  dequeue(): T | undefined {
    return this.storage.shift();
  }

  size(): number {
    return this.storage.length;
  }
}