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
  find(val: T): TreeNode<T> | undefined;
  contains(val: T): boolean;
  bfs(): T[] | undefined;
  dfsInOrder(): T[] | undefined;
  dfsPreOrder(): T[] | undefined;
}

/** @method insert: insert the node in the right order */
/** @method find: find the node with provided value */
/** @method contains: returns true if the tree has a node with the provided value; false otherwise */
/** @method bfs: breadth first search traversal */
/** @method dfsInOrder: depth first search in order traversal */
/** @method dfsPreOrder: depth first search pre order traversal */
/** @method dfsPostOrder: depth first search post order traversal */

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

  find(val: T): TreeNode<T> | undefined {
    if (this.root === null) return undefined;
    let current: TreeNode<T> | null = this.root;
    //helper to stop traversal
    let found = false;
    while (!found && current) {
      if (val === current.val) return current;
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current as TreeNode<T>;
  }

  contains(val: T): boolean {
    if (this.root === null) return false;
    let current: TreeNode<T> | null = this.root;
    while (current) {
      if (val === current.val) return true;
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
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
      data.push(node.val); //val - for convenience
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  /** sorted data */
  dfsInOrder(): T[] | undefined {
    if (!this.root) return undefined;
    let data: T[] = [];
    let current = this.root;
    function traverse(node: TreeNode<T>) {
      if (node.left) traverse(node.left);
      data.push(node.val); //val - for convenience
      if (node.right) traverse(node.right);
    }
    traverse(current as TreeNode<T>);
    return data;
  }

  /** first add to the list and then visit the node */
  dfsPreOrder(): T[] | undefined {
    if (!this.root) return undefined;
    let data: T[] = [];
    let current = this.root;
    function traverse(node: TreeNode<T>) {
      data.push(node.val); //val - for convenience
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current as TreeNode<T>);
    return data;
  }

  /** first visit the node and then add to the list */
  dfsPostOrder(): T[] | undefined {
    if (!this.root) return undefined;
    let data: T[] = [];
    let current = this.root;
    function traverse(node: TreeNode<T>) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val); //val - for convenience
    }
    traverse(current as TreeNode<T>);
    return data;
  }
}