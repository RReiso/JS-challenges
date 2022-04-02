class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  unshift(data) {
    var node = new Node(data, this.head);
    this.head = node;
    this.length++;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let temp = this.head;
    while (temp && temp.next) {
      temp = temp.next;
    }
    return temp;
  }

  clear() {
    this.head = null;
    this.length = 0;
  }
  
  shift() {
    if (!this.head) return null;

    const oldHead = this.head;
    this.head = this.head.next;
    this.length--;
    return oldHead;
  }

  pop() {
    if (!this.length) {
      return null;
    }

    if (this.length === 1) {
      return this.shift();
    }

    let temp = this.head;
    let prev = temp;

    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }
    prev.next = null;
    this.length--;

    return temp;
  }

  push(value) {
    if (!this.head) {
      return this.unshift(value);
    }
    let last = this.getLast();
    const newNode = new Node(value, null);
    last.next = newNode;
    this.length++;
  }
}

class Node {
  constructor(data, next) {
    this.value = data;
    this.next = next;
  }
}
