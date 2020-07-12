'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  peek() {
    if (this.top !== null) {
      return this.top.value;
    } else {
      return 'this Stack is empty you should push value first.';
    }
  }
  push(item) {
    let node = new Node(item);
    if (this.top === null) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
  }
  pop() {
    if (this.top !== null) {
      let poped = this.top;
      this.top = this.top.next;
      return poped;
    }
    if (this.top === null) {
      console.log('this Stack is empty you should push value first.');
    }
  }
  isEmpty() {
    if (this.top !== null) {
      return true;
    } else {
      return false;
    }
  }
}

class Queue {
  constructor() {
    this.front = null;
  }
  enqueue(item) {
    let node = new Node(item);
    if (this.front === null) {
      this.front = node;
    } else {
      node.next = this.front;
      this.front = node;
    }
  }
  dequeue() {
    if (this.front !== null) {
      let poped = this.front;
      this.front = this.front.next;
      return poped;
    }
    if (this.front === null) {
      console.log('this Queue is empty you should enqueue value first.');
    }
  }

  peek() {
    if (this.front !== null) {
      return this.front.value;
    } else {
      return 'this Queue is empty you should enqueue value first.';
    }
  }
  isEmpty() {
    if (this.front !== null) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = {
  Node: Node,
  Stack: Stack,
  Queue: Queue,
};
