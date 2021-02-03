class TreeNode<T> {
  public left: TreeNode<T> | null;
  public right: TreeNode<T> | null;
  constructor(public val: T) {
    this.left = null;
    this.right = null;
  }
}

interface IBST<T> {
  insert(val: T): BST<T>;
  bfs(): T[] | undefined;
}

export class BST<T> implements IBST<T> {
  private root: TreeNode<T> | null;
  constructor() {
    this.root = null;
  }

  insert(val: T): BST<T> {
    let newNode = new TreeNode(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val === current.val) return this;
      if (val < current.val) {
        //check where to insert on the left
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (val > current.val) {
        //check where to insert on the right
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  bfs(): T[] | undefined {
    let data = [];
    //bookkeeping queue for current nodes
    let queue = [];
    if (!this.root) return undefined;
    let node = this.root;
    queue.push(this.root);
    while (queue.length) {
      node = queue.shift() as TreeNode<T>;
      data.push(node.val); //val - for demonstration purpose
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

}