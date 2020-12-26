class ListNode<T> {
  public next: ListNode<T> | null;

  constructor(public val: T) {
    this.next = null;
  }
}

interface ISinglyLinkedList<T> {
  unshift(val: T): SinglyLinkedList<T>;
  shift(): void;
  push(val: T): SinglyLinkedList<T>;
  pop(): void;
  getByIndex(index: number): ListNode<T> | null;
  setValueByIndex(index: number, val: T): boolean;
  insertValueAtIndex(index: number, val: T): boolean;
  removeNodeAtIndex(index: number): ListNode<T> | null;
  traverse(): void;
}

class SinglyLinkedList<T> implements ISinglyLinkedList<T> {
  public length: number;
  public head: ListNode<T> | null;
  public tail: ListNode<T> | null;

  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  unshift(val: T) {

    return this;
  }

  shift() {

  }

  push(val: T) {
    let node = new ListNode(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {

  }

  getByIndex(index: number): ListNode<T> | null {

  }
  setValueByIndex(index: number, val: T): boolean {

  }
  insertValueAtIndex(index: number, val: T): boolean {

  }

  removeNodeAtIndex(index: number): ListNode<T> | null {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) this.shift();
    if (index === this.length - 1) this.pop();
    const prevNode = this.getByIndex(index - 1);
    const toBeRemoved = prevNode?.next;
    prevNode.next = toBeRemoved?.next;
    this.length--;
    return toBeRemoved;
  }

  traverse() {
    let current = this.head;
    while (current?.next) {
      current = current?.next;
    }
  }
}