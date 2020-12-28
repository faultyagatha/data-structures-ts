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
    const node = new ListNode(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  shift() {
    if (this.length === 0) return;
    const currentHead = this.head;
    this.head = currentHead!.next; //may be problematic. check this.
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentHead;
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
    if (this.length === 0) return;
    //start from the beginning
    let current = this.head;
    let newTail = current;
    //while there is a next node
    while (current?.next) {
      newTail = current;
      //move forward current until we reach the end
      current = current.next;
    }
    this.tail = newTail;
    this.tail!.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  getByIndex(index: number): ListNode<T> | null {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current!.next;
      counter++;
    }
    return current;
  }

  setValueByIndex(index: number, val: T): boolean {
    const foundNode = this.getByIndex(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insertValueAtIndex(index: number, val: T): boolean {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      this.push(val);
      return true;
    }
    if (index === 0) {
      this.unshift(val);
      return true;
    }
    const nodeToInsert = new ListNode(val);
    //get the node before
    const prev = this.getByIndex(index - 1);
    const temp = prev!.next;
    nodeToInsert.next = temp;
    this.length++;
    return true;
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