
const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    const dequeued = this.head;
    if (!dequeued) {
      return null;
    } else if (dequeued === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = dequeued.next;
    }
    return dequeued.value;
  }
}

module.exports = {
  Queue
};