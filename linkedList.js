class Node {
  constructor(data, next) {
    this.value = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  unshift(value) {
    const node = new Node(value, this.head);
    this.head = node;
    this.length++;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let curr = this.head;
    while (curr && curr.next) {
      curr = curr.next;
    }
    return curr;
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

    let curr = this.head;
    let prev = curr;

    while (curr.next) {
      prev = curr;
      curr = curr.next;
    }
    prev.next = null;
    this.length--;

    return curr;
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

  get(index) {
    let curr = this.head;
    let currIdx = 0;
    while (curr) {
      if (currIdx === index) {
        return curr;
      }
      curr = curr.next;
      currIdx++;
    }
    return null;
  }

  insert(index, value) {
    if (index === 0) {
      return this.unshift(value);
    }

    if (index > this.length || index < 0) return false;

    let curr = this.head;
    let currIdx = 0;
    while (currIdx < index - 1) {
      curr = curr.next;
      currIdx++;
    }

    const newNode = new Node(value, curr.next);
    curr.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index >= this.length || index < 0) return false;

    if (index === 0) {
      return this.shift();
    }

    let currIdx = 0;
    let curr = this.head;
    let prev = curr;

    while (curr) {
      if (currIdx === index) {
        prev.next = curr.next;
        this.length--;
        return curr;
      }
      prev = curr;
      curr = curr.next;
      currIdx++;
    }
  }

  printNodes() {
    console.log("length", this.length);
    let curr = this.head;
    while (curr) {
      console.log(curr);
      curr = curr.next;
    }
  }
}
