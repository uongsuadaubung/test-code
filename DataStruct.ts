export class Heap<T> {
  private readonly heap: { item: T; priority: number }[];
  private readonly heapType: "min" | "max";

  constructor(type: "min" | "max") {
    this.heap = [];
    this.heapType = type;
  }

  private getLeftChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 1;
  }

  private getRightChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 2;
  }

  private getParentIndex(childIndex: number): number {
    return Math.floor((childIndex - 1) / 2);
  }

  private hasLeftChild(index: number): boolean {
    return this.getLeftChildIndex(index) < this.length;
  }

  private hasRightChild(index: number): boolean {
    return this.getRightChildIndex(index) < this.length;
  }

  private hasParent(index: number): boolean {
    return this.getParentIndex(index) >= 0;
  }

  private leftChild(index: number): { item: T; priority: number } {
    return this.heap[this.getLeftChildIndex(index)];
  }

  private rightChild(index: number): { item: T; priority: number } {
    return this.heap[this.getRightChildIndex(index)];
  }

  private parent(index: number): { item: T; priority: number } {
    return this.heap[this.getParentIndex(index)];
  }

  private swap(indexOne: number, indexTwo: number): void {
    const temp = this.heap[indexOne];
    this.heap[indexOne] = this.heap[indexTwo];
    this.heap[indexTwo] = temp;
  }

  private heapifyUp(): void {
    let index = this.length - 1;
    while (this.hasParent(index)) {
      const parentIndex = this.getParentIndex(index);
      const shouldSwap =
        this.heapType === "max"
          ? this.parent(index).priority < this.heap[index].priority
          : this.parent(index).priority > this.heap[index].priority;

      if (shouldSwap) {
        this.swap(parentIndex, index);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  private heapifyDown(): void {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let chosenChildIndex = this.getLeftChildIndex(index);
      if (this.hasRightChild(index)) {
        if (this.heapType === "max") {
          if (
            this.rightChild(index).priority > this.leftChild(index).priority
          ) {
            chosenChildIndex = this.getRightChildIndex(index);
          }
        } else if (
          this.rightChild(index).priority < this.leftChild(index).priority
        ) {
          chosenChildIndex = this.getRightChildIndex(index);
        }
      }

      const shouldSwap =
        this.heapType === "max"
          ? this.heap[index].priority < this.heap[chosenChildIndex].priority
          : this.heap[index].priority > this.heap[chosenChildIndex].priority;

      if (shouldSwap) {
        this.swap(index, chosenChildIndex);
        index = chosenChildIndex;
      } else {
        break;
      }
    }
  }

  public insert(item: T, priority: number): void {
    this.heap.push({ item, priority });
    this.heapifyUp();
  }

  public remove(): T | undefined {
    if (this.length === 0) {
      return undefined;
    }
    const item = this.heap[0].item;
    this.heap[0] = this.heap[this.length - 1];
    this.heap.pop();
    this.heapifyDown();
    return item;
  }

  public peek(): T | undefined {
    if (this.length === 0) {
      return undefined;
    }
    return this.heap[0].item;
  }

  public get length(): number {
    return this.heap.length;
  }
}

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

class TrieNode {
  public children: Map<string, TrieNode>;
  public isEndOfWord: boolean;

  constructor() {
    this.children = new Map<string, TrieNode>();
    this.isEndOfWord = false;
  }
}

export class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char)!;
    }
    node.isEndOfWord = true;
  }

  search(word: string): boolean {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char)!;
    }
    return node.isEndOfWord;
  }

  startsWith(prefix: string): boolean {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char)!;
    }
    return true;
  }
}
