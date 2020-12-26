class ListNode<T> {
  public next: ListNode<T> | null;
  public prev: ListNode<T> | null;

  constructor(public val: T) {
    this.next = null;
    this.prev = null;
  }
}

interface IDoublyLinkedList<T> {
  unshift(val: T): DoublyLinkedList<T>;
  shift(): void;
  push(val: T): DoublyLinkedList<T>;
  pop(): void;
  getByIndex(index: number): ListNode<T> | null;
  setValueByIndex(index: number, val: T): boolean;
  insertValueAtIndex(index: number, val: T): boolean;
  removeNodeAtIndex(index: number): ListNode<T> | null;
  traverse(): T[];
}

/** @method unshift: insert in the beginning */
/** @method shift: remove from the beginning */
/** @method push: insert in the end */
/** @method pop: remove from the end */
/** @method getByIndex: get the node by a given index, can be adapted to return a value */
/** @method setValueByIndex: set the node's value by a given index */
/** @method insertValueAtIndex: insert a new node with a given value by a given index */
/** @method removeNodeAtIndex: remove a node by a given index */
/** @method traverse: convenience method: return the list as an array of its values */

export class DoublyLinkedList<T> implements IDoublyLinkedList<T> {
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
    // is the list empty? 
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail === null;
    } else {
      this.head = oldHead!.next;
      //remove lingering old nodes
      this.head!.prev = null;
      oldHead!.next = null;
    }
    this.length--;
    return this;
  }

  push(val: T): DoublyLinkedList<T> {
    let node = new ListNode(val);
    console.log('NODE: ', node);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let popped = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popped!.prev;
      this.tail!.next = null;
      //remove lingering old nodes
      popped!.prev = null;
    }
    this.length--;
    return this;
  }

  getByIndex(index: number): ListNode<T> | null {
    if (index < 0 || index >= this.length) return null;
    const middle = Math.floor(this.length * 0.5);
    let count;
    let current: ListNode<T> | null = null;
    //start from the head
    if (index <= middle) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current!.next;
        count++;
      }
    }
    //start from the tail
    if (index > middle) {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current!.prev;
        count--;
      }
    }
    console.log(current?.val);
    return current; //current.value if value is needed
  }

  setValueByIndex(index: number, val: T): boolean {
    let found = this.getByIndex(index);
    if (found !== null) {
      found.val = val;
      return true;
    }
    return false;
  }

  insertValueAtIndex(index: number, val: T): boolean {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      this.unshift(val);
      return true;
    }
    if (index === this.length) {
      this.push(val);
      return true;
    }
    else {
      const node = new ListNode<T>(val);
      const foundPrev = this.getByIndex(index - 1);
      const foundNext = foundPrev!.next;
      //insert
      foundPrev!.next = node;
      //fix connections
      node.prev = foundPrev;
      node.next = foundNext;
      foundNext!.prev = node;
    }
    this.length++;
    return true;
  }

  removeNodeAtIndex(index: number): ListNode<T> | null {
    let toBeRemoved: ListNode<T> | null = null;
    if (index < 0 || index >= this.length) return null;
    if (index === 0) this.shift();
    if (index === this.length - 1) this.pop();
    else {
      toBeRemoved = this.getByIndex(index);
      //this is a workaround typesafety, probably redundant
      if (toBeRemoved?.next) {
        toBeRemoved!.prev!.next = toBeRemoved.next;
        toBeRemoved.next.prev = toBeRemoved.prev;
        toBeRemoved.next = null;
        toBeRemoved.prev = null;
      }
    }
    this.length--;
    return toBeRemoved;
  }

  traverse(): T[] {
    const array: T[] = [];
    let currentNode = this.head;
    while (currentNode) {
      array.push(currentNode.val);
      currentNode = currentNode.next;
    }
    console.log(array);
    return array;
  }
}