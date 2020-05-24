'use strict';
const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }
    let nextHead  = this.head;
    while (nextHead.next) {
      nextHead = nextHead.next;
    }
    nextHead.next = node;
    return this;
  }
  include(values){
    const node = new Node(values);
    if (!this.head) {
      this.head = node;
      return this;
    }
    let nextHead = this.head;
    while(nextHead){
      if(nextHead.value === values){
        nextHead = nextHead.next;
        return true;
      }else{
        return false;
      }
    }
  }
  toString(){
    let nextHead = this.head;
    while(nextHead){
      let convertToString = nextHead.value;
      let converted = String(convertToString);
      return converted;
    }
  }
}
module.exports = LinkedList;
