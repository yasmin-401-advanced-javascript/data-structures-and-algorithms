'use strict';

const QueueAndStackNode = require('../queueWithStacks/queue-with-stacks.js');

class BinaryTree {
  constructor(root){
    this.root = root;
  }
  add(value){

    const node = new QueueAndStackNode.Node(value);
    if(!this.root){
      this.root = node;
      return this.root;
    }
    let currentRoot = this.root;
    let parent  = null;
    while(currentRoot !== null){
      parent = currentRoot;
      if(currentRoot.value < node.value){
        currentRoot = currentRoot.right;
      }else{
        currentRoot = currentRoot.left;
      }
    }
    if(parent.value < node.value){
      parent.right = node;
    }else{
      parent.left = node;
    }
    return this.root;
  }
  breadth_first(){
    let newQeue = new QueueAndStackNode.Queue();
    let final = [];
    newQeue.enqueue(this.root);
    while(newQeue.peek()){
      let front = newQeue.dequeue();
      final.push(front.value);
      if(front.left){newQeue.enqueue(front.left);
      }
      if(front.right)newQeue.enqueue(front.right);
    }
    return final;
  }
}

module.exports = BinaryTree;
