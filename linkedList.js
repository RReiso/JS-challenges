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
    if (index >= this.length || index < 0) return false;

    if (index === 0) {
      const newNode = new Node(value, this.head);
      this.head = newNode;
      return true;
    }

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
}

class Node {
  constructor(data, next) {
    this.value = data;
    this.next = next;
  }
}
