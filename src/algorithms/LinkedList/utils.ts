import { LinkedListNode } from '../../data-structures/index.ts';

const node1 = new LinkedListNode(1);
const node2 = new LinkedListNode(2);
const node3 = new LinkedListNode(3);
const node4 = new LinkedListNode(4);
const node5 = new LinkedListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

export function isCycle<T>(head: LinkedListNode<T>) {}

export function traverse<T>(
  head: LinkedListNode<T>,
  callback: (node: LinkedListNode<T>) => void,
) {}

export function reverse<T>(head: LinkedListNode<T>) {}

export function removeNthFromEnd<T>(
  head: LinkedListNode<T>,
  n: number,
): LinkedListNode<T> | null {}
