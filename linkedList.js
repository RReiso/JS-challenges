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
}

class Node {
  constructor(data, next) {
    this.value = data;
    this.next = next;
  }
}
