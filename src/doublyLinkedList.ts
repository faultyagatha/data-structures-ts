
class ListNode<T> {
  public next: ListNode<T> | null;
  public prev: ListNode<T> | null;

  constructor(public val: T) {
    this.next = null;
    this.prev = null;
  }
}

interface IDoublyLinkedList<T> {
  unshift(val: T): DoublyLinkedList<T>; //insert in the start
  shift(): void;
  push(val: T): DoublyLinkedList<T>; //insert in the end
  pop(): void;
  traverse(): T[];
  size(): number;
  search(comparator: (val: T) => boolean): ListNode<T> | null;
}

class DoublyLinkedList<T> implements IDoublyLinkedList<T> {
  public length: number;
  private head: ListNode<T> | null;
  private tail: ListNode<T> | null;

  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  unshift(val: T): DoublyLinkedList<T> {
    const node = new ListNode(val);
    // the list is empty? 
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      // the list is not empty?
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  push(val: T): DoublyLinkedList<T> {
    let node = new ListNode(val);
    if (!this.head && !this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      // this.tail.next = node;
    }
    return this;
  }
}