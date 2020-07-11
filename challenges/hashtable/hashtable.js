class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  prepend(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }
  // for you to see and not to use
  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      const current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }
  search(key){
    if(this.head.value[key]){
      return this.head.value[key];
    }
    let current = this.head;
    while(current.next){
      current = current.next;
      if(current.value[key]){
        // console.log(current.value[key])
        return current.value[key];
      }
    }
    if(current.value[key]){
      conole.log('dddddddddd',current.value[key])
      return current.value[key]
    }
    return null;
  }
  contains(key){
    if(this.head.value[key]){
      return true;
    }
    let current = this.head;
    while(current.next){
      current = current.next;
      if(current.value[key]){
        return true;
      }
    }
    return false;
  }
    
}
class Hashmap {
  constructor(size) {
    this.size = size;
    this.storage = new Array(size); // [] with that size
  }
  hash(key) {
    const sumCharCode = key.split('').reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    // console.log(sumCharCode);
    // 19 is a prime number YOU CAN USE ANY OTHER PRIME VALUE
    // since the resulted number can go out of size we will do % size
    const hashKey = (sumCharCode * 19) % this.size;
    return hashKey; // 2000
  }
  set(key, value) {
    // we need to get index in the storage (Array)
    const hash = this.hash(key);
    // console.log('HASH', hash);
    // we need to check if there is already value at that index
    if (!this.storage[hash]) {
      // if there is no value create linkedlist
      const ll = new LinkedList();
      ll.prepend({ [key]: value });
      this.storage[hash] = ll; // ===> [3222] = {head:{value:{"key","value"},next:{}}}
    } else {
      // we already have a value at that index so just prepend to the front of the linkedList
      this.storage[hash].prepend({ [key]: value });
    }
  }
   get(key){
     if(key){
    let hash = this.hash(key);
    if(!this.storage[hash]){
      return null;
    }else{
      // console.log('hi', hash)
     return this.storage[hash].search(key);
    }
  }else{
    return 'you should pass a key'
  }
   }
  contain(key){
    if(key){
    let hash = this.hash(key);
    // console.log(hash , 'isExcist')
  if(!this.storage[hash]){
      return false;
    }else{
      return this.storage[hash].contains(key);
    }
  }else{
    return 'you should pass a key'
  }
}

}