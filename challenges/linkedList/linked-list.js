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
    this.head = node;
    node.next = nextHead;
    return this;
  }
  include(values){
    let nextHead = this.head;
    if(nextHead.value === values){
      return true;
    }else{
      while(nextHead.next){
        nextHead = nextHead.next;
        if(nextHead.value === values){
          return true;
        }
      }
    }
    return false;
  }

  toString(){
    let nextHead = this.head;
    let str = `{ ${nextHead.value} } -> `;
    while(nextHead.next){
      nextHead = nextHead.next;
      str += `{ ${nextHead.value} } -> `;
    }
    str += 'NULL';
    return str;
  }
}
module.exports = LinkedList;
