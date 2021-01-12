/** LIFO (last in first out) data structure */

interface IStack<T> {
  push(el: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  size(): number;
  clear(): void;
}

/** @member storage: all stacked items */
/** @member capacity: a number of items a stack can fit */
/** @method push: adds an item to the stack */
/** @method pop: removes an item from the stack */
/** @method peek: returns the last added item without removing it from the stack */
/** @method size: returns the length of the stack */
/** @method clear: removes all elements from the stack */
export class Stack<T> implements IStack<T> {
  private storage: T[] = [];
  constructor(private capacity: number = Infinity) { }

  push(el: T): void {
    if (this.size() === this.capacity) {
      throw new Error("Stack has reached max capacity");
    }
    this.storage.push(el);
  }

  pop(): T | undefined {
    return this.storage.pop();
  }

  peek(): T | undefined {
    return this.storage[this.size() - 1];
  }

  size(): number {
    return this.storage.length;
  }

  clear(): void {
    this.storage.length = 0;
  }
}