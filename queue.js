class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.size++;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }
    const temp = this.first;
    this.first = this.first.next;
    this.size--;
    if (this.size === 0) {
      this.last = null;
    }
    return temp;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue);
queue.dequeue();
console.log(queue);

// Time - O(1)
// Space - O(1)
