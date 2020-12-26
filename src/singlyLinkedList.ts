class ListNode<T> {
  public next: ListNode<T> | null;

  constructor(public val: T) {
    this.next = null;
  }
}

// interface ISinglyLinkedList<T> {
//   unshift
//   shift
//   push
//   pop
//   traverse
//   size
//   search
// }

// class SinglyLinkedList <T extends ListNode> {
//   public length: number;
//   public head: ListNode | null;
//   public tail: ListNode | null;

//   constructor() {
//     this.length = 0;
//     this.head = null;
//     this.tail = null;
//   }

//   push(val: any) {
//     let node = new ListNode(val);
//     if (!this.head) {
//       this.head = node;
//       this.
//     }
//   }
// }