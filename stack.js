// Implement stack with Linked List

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  unshiftEl(value) {
    const newEl = new Node(value);
    if (!this.first) {
      this.first = newEl;
      this.last = newEl;
    } else {
      const temp = this.first;
      this.first = newEl;
      newEl.next = temp;
    }
    this.size++;
  }

  shiftEl() {
    if (!this.first) {
      return null;
    }
    const temp = this.first;
    this.first = this.first.next;
    this.size--;
    return temp;
  }
}

const stack = new Stack();
stack.unshiftEl(1);
stack.unshiftEl(2);
stack.unshiftEl(3);
console.log(stack);

stack.shiftEl();
stack.shiftEl();
console.log(stack);

// Time -O(1)
// Space - O(1)
