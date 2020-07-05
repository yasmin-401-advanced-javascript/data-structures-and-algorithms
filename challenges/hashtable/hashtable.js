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

}
