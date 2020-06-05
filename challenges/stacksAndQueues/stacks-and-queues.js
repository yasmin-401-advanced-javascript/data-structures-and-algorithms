'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class Stack {
  constructor() {
    this.storage = [];
    this.top = null;
  }
  peek() {
    if(this.storage.length > 0 ){
      return this.top;
    }else{
      return 'this Stack is empty you should enqueue value first.'
    }
  }
  push(item) {
    this.storage.unshift(item);
    this.top = item;
  }
  pop() {
    if(this.storage.length > 0 ){
      const item = this.storage.shift();
      this.top = this.storage[0] ? this.storage[0] : null;
      return item;
    }else{
      return 'this Stack is empty you should enqueue value first.'
    }
  }
  isEmpty(){
    if(this.storage.length > 0 ){
      return true
    }else{
      return false
    }
  }
}

class Queue {
  constructor() {
    this.storage = [];
    this.front = null;
  }
  enqueue(item) {
    this.storage.push(item);
    this.front = item;
  }
  dequeue() {
    if(this.storage.length > 0 ){
      const item = this.storage.shift();
      this.front = this.storage[0] ? this.storage[0] : null;
      return item;
    }else{
      return 'this Queue is empty you should enqueue value first.'
    }
  }

  peek() {
    if(this.storage.length > 0 ){
      return this.front;
    }else{
      return 'this Queue is empty you should enqueue value first.'
    }
  }
  isEmpty(){
    if(this.storage.length > 0 ){
      return true
    }else{
      return false
    }
  }
}

module.exports =
{
  Node:Node,
  Stack :Stack ,
  Queue : Queue,
}
