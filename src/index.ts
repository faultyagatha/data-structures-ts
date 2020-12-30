import { DoublyLinkedList } from './doublyLinkedList';
import { bubbleSort, selectionSort, insertionSort } from './algorithms';

/** test */
interface Languages {
  title: string;
}
let newDLL = new DoublyLinkedList<Languages>();
newDLL.push({ title: "javascript" });
newDLL.push({ title: "typescript" });
newDLL.push({ title: "python" });
newDLL.traverse();

newDLL.unshift({ title: "c++" });
newDLL.traverse();
// newDLL.getByIndex(1);
newDLL.insertValueAtIndex(1, { title: "rust" });
newDLL.traverse();
newDLL.removeNodeAtIndex(1);
newDLL.traverse();

console.log(bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
console.log(insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));