'use strict';


class Node {
  constructor(value , left = null , right = null){
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root){
    this.root = root;
  }
  // root => left => right
  preOrder(){
    const result = [];
    const _traversal = (node)=>{
      result.push(node.value);
      if(node.left) _traversal (node.left);
      if(node.right) _traversal (node.right);
    };
    _traversal(this.root);
    return result;
  }
  // left => root => right

  inOrder(){
    const result = [];
    const _traversal = (node)=>{
      if(node.left) _traversal (node.left);
      result.push(node.value);
      if(node.right) _traversal (node.right);
    };
    _traversal(this.root);
    return result;
  }
  // left => right =>root

  postOrder(){
    const result = [];
    const _traversal = (node)=>{
      if(node.left) _traversal (node.left);
      if(node.right) _traversal (node.right);
      result.push(node.value);
    };
    _traversal(this.root);
    return result;
  }
  add(value){

    const node = new Node(value);
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
  contains(value){
    if(this.root.value === value ){
      return true;
    }
    let currentRoot = this.root;
    while(currentRoot !== null){
      if(currentRoot.value < value){
        currentRoot = currentRoot.right;
        if(currentRoot && currentRoot.value === value){
          return true;
        }
      }else{
        currentRoot = currentRoot.left;
        if(currentRoot && currentRoot.value === value){
          return true;
        }
      }
    }
    return false;
  }

  find_maximum_value(){
    let maximum = 0;
    const traversal = (node) =>{
      if (maximum < node.value) {
        maximum = node.value;
      }
      if(node.left) traversal (node.left);
      if(node.right) traversal (node.right);
    };
    traversal(this.root);
    return maximum;
  }
}

module.exports = BinaryTree;
