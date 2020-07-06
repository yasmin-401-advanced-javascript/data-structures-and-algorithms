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
      arrayTransition() {
        let arr = [];
        let current = this.head;
        while (current) {
          arr.push(current.value);
          current = current.next;
        }
        return arr;
      }
}

class Hashtable {
    constructor(size) {
      this.size = size;
      this.map = new Array(size);
    }
    hash(key) {
        const sumCharCode = key.split('').reduce((acc, char) => {
          return acc + char.charCodeAt(0);
        }, 0);
        console.log(sumCharCode);
        // 19 is a prime number YOU CAN USE ANY OTHER PRIME VALUE
        // since the resulted number can go out of size we will do % size
        const hashKey = (sumCharCode * 19) % this.size;
        return hashKey; // 2000
     }
    add(key, value) {
        // we need to get index in the storage (Array)
        const hash = this.hash(key);
        console.log('HASH', hash);
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
        let hash = this.hash(key);
        if(!this.storage[hash]){
          return null;
        }else{
          return this.storage[hash]
        }
      }
      contain(key){
        let hash = this.hash(key);
        console.log(hash , 'isExcist')
      if(!this.storage[hash]){
          return false;
        }else{
          return true
        }
      }
}
