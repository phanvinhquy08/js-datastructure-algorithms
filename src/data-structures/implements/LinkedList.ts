import { ComparatorFunction, Comparator } from '../../utils/Comparator';

export type Predicate<T> = (value: T) => boolean;
export class LinkedList<T> {
  public head: LinkedListNode<T> | null;
  public tail: LinkedListNode<T> | null;
  public compare: Comparator<T>;

  constructor(comparatorFunction?: ComparatorFunction<T>) {
    this.head = null;
    this.tail = null;
    this.compare = new Comparator(comparatorFunction);
  }

  prepend(value: T) {
    const newNode = new LinkedListNode(value, this.head);

    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  append(value: T) {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    // Tail always points to the last node
    this.tail!.next = newNode;
    this.tail = newNode;

    return this;
  }

  size() {
    let count = 0;
    let currentNode = this.head;

    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }

    return count;
  }

  insert(value: T, rawIndex: number) {
    const index = Math.max(rawIndex, 0);

    if (index === 0) {
      return this.prepend(value);
    }

    if (index >= this.size()) {
      return this.append(value);
    }

    let count = 0;
    let currentNode = this.head;

    while (count < index - 1) {
      // this current node is the previous node of the node at the index
      currentNode = currentNode!.next;
      count++;
    }

    if (currentNode) {
      const newNode = new LinkedListNode(value, currentNode.next);
      currentNode.next = newNode;
    }
    return this;
  }

  contains(valueOrPredicate: T | Predicate<T>) {
    return !!this.find(valueOrPredicate);
  }

  find(valueOrPredicate: T | Predicate<T>) {
    let currentNode = this.head;

    while (currentNode) {
      if (typeof valueOrPredicate === 'function') {
        const predicate = valueOrPredicate as Predicate<T>;
        if (predicate(currentNode.value)) {
          return currentNode;
        }
      } else {
        if (this.compare.isEqual(currentNode.value, valueOrPredicate)) {
          return currentNode;
        }
      }

      currentNode = currentNode.next;
    }

    return undefined;
  }

  indexOf(valueOrPredicate: T | Predicate<T>) {
    let currentNode = this.head;
    let count = 0;

    while (currentNode) {
      if (typeof valueOrPredicate === 'function') {
        const predicate = valueOrPredicate as Predicate<T>;
        if (predicate(currentNode.value)) {
          return count;
        }
      } else {
        if (this.compare.isEqual(currentNode.value, valueOrPredicate)) {
          return count;
        }
      }

      currentNode = currentNode.next;
      count++;
    }

    return -1;
  }

  /**
   * Find the node at the given index
   * @params rawIndex {number}
   * @return linkedListNode {LinkedListNode<T> | undefined}
   */
  findByIndex(rawIndex: number) {
    const index = Math.max(rawIndex, 0);

    if (index >= this.size()) {
      return undefined;
    }

    let count = 0;
    let currentNode = this.head;

    while (count < index) {
      currentNode = currentNode!.next;
      count++;
    }

    return currentNode || undefined;
  }

  delete(value: T) {
    let currentNode = this.head;

    if (currentNode?.value === value) {
      this.head = currentNode.next;
      return true;
    }

    while (currentNode?.next) {
      if (this.compare.isEqual(currentNode?.next.value, value)) {
        break;
      }
      currentNode = currentNode.next;
    }

    if (currentNode) {
      if (currentNode.next === this.tail) {
        this.tail = currentNode;
        this.tail.next = null;
        return true;
      }
      currentNode.next = currentNode.next?.next || null;
      return true;
    }

    return false;
  }

  deleteHead() {
    if (!this.head) return false;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return true;
    }

    this.head = this.head.next;
    return true;
  }

  deleteTail() {
    if (!this.tail) return false;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return true;
    }

    let currentNode = this.head;

    while (currentNode?.next !== this.tail) {
      currentNode = currentNode?.next || null;
    }

    if (currentNode) {
      this.tail = currentNode;
      this.tail.next = null;
      return true;
    }

    return false;
  }

  deleteByIndex(rawIndex: number) {
    const index = Math.max(rawIndex, 0);

    let currentNode = this.head;
    let count = 0;

    if (index >= this.size()) {
      return false;
    }

    if (index === 0) {
      return this.deleteHead();
    }

    if (index === this.size() - 1) {
      return this.deleteTail();
    }

    while (count < index - 1) {
      // this current node is the previous node of the node at the index
      currentNode = currentNode?.next || null;
      count++;
    }

    if (currentNode) {
      currentNode.next = currentNode.next?.next || null;
      return true;
    }

    return false;
  }

  fromArray(values: T[]) {
    values.forEach((value) => this.append(value));
    return this;
  }

  toArray() {
    const nodes: LinkedListNode<T>[] = [];
    let currentNode = this.head;

    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  reverse() {
    let currentNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currentNode) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      // tro ve node truoc do
      prevNode = currentNode;
      currentNode = nextNode;
    }

    this.tail = this.head;
    this.head = prevNode;
  }

  toPlainObject(node?: LinkedListNode<T>) {
    return node ? node.toPlainObject() : this.head?.toPlainObject();
  }

  static fromArray<T>(values: T[], comparatorFunction?: ComparatorFunction<T>) {
    const linkedList = new LinkedList<T>(comparatorFunction);
    values.forEach((value) => linkedList.append(value));
    return linkedList;
  }
}

export type NodePlainObject<T> = {
  value: T;
  next: NodePlainObject<T> | null;
};

export class LinkedListNode<T> {
  constructor(public value: T, public next: LinkedListNode<T> | null = null) {}

  toString(callback?: (value: T) => string) {
    return callback ? callback(this.value) : `${this.value}`;
  }

  toPlainObject(): NodePlainObject<T> {
    return {
      value: this.value,
      next: this.next ? this.next.toPlainObject() : null,
    };
  }
}
