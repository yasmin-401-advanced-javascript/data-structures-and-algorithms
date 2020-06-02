'use strict';
const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }
  ////////////////////////////////
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
  /////////////////////////
  append(value){
    const node = new Node(value);
    let nextHead  = this.head;
    if (!this.head) {
      this.head = node;
      return this;
    }
    while(nextHead.next){
      nextHead = nextHead.next;
    }
    nextHead.next = node;
    return this;
  }

  /////////////////////////////////////
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
  ////////////////////////
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
  //////////////////////////////
  insertBefore(value, newVal){
    if(value && newVal){
      let node = new Node(newVal);
      if(this.head.value === value){
        let nextHead = this.head;
        this.head= node ;
        this.head.next = nextHead;
        return this;
      }
      let nextHead = this.head;
      while(nextHead.next){
        var previousValue = nextHead.next ;

        if(nextHead.next.value === value){
          nextHead.next = node ;
        }
        nextHead = nextHead.next ;
      }
      nextHead.next = previousValue;
      return this ;
    }else{
      return 'please enter the current value and the new value';
    }
  }
  insertAfter(value, newVal){
    if( value && newVal){
      let node = new Node(newVal);
      if(this.head.value === value){
        let stableHead = this.head.next;
        this.head.next = node;
        this.head.next.next = stableHead;
        return this;
      }
      let nextHead = this.head;
      while(nextHead.next){
        nextHead = nextHead.next ;
        if(nextHead.value === value){
          let stableHead = nextHead.next;
          nextHead.next = node ;
          nextHead.next.next = stableHead;
          return this;
        }
      }
    }else{
      return 'please enter the current value and the new value';
    }

  }
  kthFromEnd(k){
    let nextHead = this.head;
    let arr = [];
    arr.push(this.head.value);
    while(nextHead.next){
      nextHead = nextHead.next;
      arr.push(nextHead.value);
    }
    if(k >= arr.length){
      return 'make sure of k value to be not equal to the length or to be less than arr.length!';
    }
    else if( typeof k !== 'number'){
      return 'you should type a number!!!';
    }
    else if( k<0){
      return 'you should type a positive number!!!';
    }else {
      return arr[arr.length-1 -k];
    }
  }

}
module.exports = LinkedList;
