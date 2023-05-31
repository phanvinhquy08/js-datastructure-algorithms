import { Comparator } from '../../utils/Comparator.js';

export class LinkedList {
  constructor(comparatorFunction) {
    this.head = null;
    this.tail = null;
    this.compare = new Comparator(comparatorFunction);
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

  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  append(value) {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      return this;
    }
  }

  containsWith(head, value) {
    if (head === null) return false;
    if (head.value === value) return true;
    return this.containsWith(head.next, value);
  }

  contains(value) {
    let currentNode = this.head;

    while (
      currentNode !== null &&
      !this.compare.isEqual(currentNode.value, value)
    ) {
      currentNode = currentNode.next;
    }

    return currentNode !== null;
  }

  // contains(value) {
  //   return this.containsWith(this.head, value);
  // }

  // contains(value) {
  //   return this.indexOf(value) > -1;
  // }

  indexOf(value) {
    let currentNode = this.head;
    let index = 0;

    while (
      currentNode !== null &&
      !this.compare.isEqual(currentNode.value, value)
    ) {
      currentNode = currentNode.next;
      index++;
    }

    return currentNode ? index : -1;
  }

  insert(value, rawIndex) {
    if (rawIndex === undefined) {
      this.append(value);
      return this;
    }

    const index = rawIndex < 0 ? 0 : rawIndex;

    if (this.head === null) {
      this.head = new LinkedListNode(value);
      this.tail = this.head;
      return this;
    }

    let count = 0;
    let currentNode = this.head;

    while (count < index) {
      currentNode = currentNode.next;
      count++;
    }

    if (currentNode) {
      const newNode = new LinkedListNode(value, currentNode.next);
      currentNode.next = newNode;
    }

    return this;
  }

  delete(value) {
    if (this.head === null) return false;

    if (this.head.value === value) {
      this.head = this.head.next;
      return true;
    }

    let currentNode = this.head;

    while (currentNode.next && currentNode.next.value !== value) {
      currentNode = currentNode.next;
    }

    if (currentNode) {
      if (currentNode.next === this.tail) {
        this.tail = currentNode;
        this.tail.next = null;
      } else {
        currentNode.next = currentNode.next.next;
      }

      return true;
    }

    return false;
  }

  deleteHead() {
    if (this.head === null) return false;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return true;
    }

    this.head = this.head.next;

    return true;
  }

  deleteTail() {
    let currentNode = this.head;

    if (currentNode === null) return false;
    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next;
    }

    currentNode.next = null;
    this.tail = currentNode;
    return true;
  }

  toArray() {
    const nodes = [];
    let currentNode = this.head;

    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  reverse() {
    let currentNode = this.head;
    let previousNode = null;
    let nextNode = null;

    // VI DU: 1 -> 2 -> 3 -> 4 -> 5 -> null
    // VONG WHILE 1: currentNode = this.head = 1, currentNode.next = null, previousNode = null, nextNode = 2
    // VONG WHILE 2: currentNode = 2, currentNode.next = 1, previousNode = 1, nextNode = 3
    // VONG WHILE 3: currentNode = 3, currentNode.next = 2, previousNode = 2, nextNode = 4
    // VONG WHILE 4: currentNode = 4, currentNode.next = 3, previousNode = 3, nextNode = 5
    // VONG WHILE 5: currentNode = 5, currentNode.next = 4, previousNode = 4, nextNode = null
    // KET THUC VONG WHILE, this.tail = this.head = 1, this.head = 5

    while (currentNode) {
      nextNode = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }

    this.tail = this.head;
    this.head = previousNode;

    return this;
  }

  static fromArray(values) {
    const linkedList = new LinkedList();
    values.forEach((value) => linkedList.append(value));
    return linkedList;
  }
}

export class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

const linkedList = LinkedList.fromArray([1, 2, 3, 4, 5]);

const a = linkedList;

console.log(a.reverse());
