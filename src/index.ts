import { DoublyLinkedList } from './doublyLinkedList';

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
