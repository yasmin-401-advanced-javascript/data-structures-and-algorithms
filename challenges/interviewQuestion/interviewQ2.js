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

  /////////////////////////
  append(value) {
    const node = new Node(value);
    let nextHead = this.head;
    if (!this.head) {
      this.head = node;
      return this;
    }
    while (nextHead.next) {
      nextHead = nextHead.next;
    }
    nextHead.next = node;
    return this;
  }

  ////////////////////////
  reverse(linkList) {
    let nextHead = linkList.head;
    let arr = [];
    arr.push(this.head.value);
    while (nextHead.next) {
      nextHead = nextHead.next;
      arr.push(nextHead.value);
    }
    console.log('arr', arr);
    let rev = [];
    for (var i = arr.length; i > 0; i--) {
      rev.push(arr.pop());
    }
    for (let i = 0; i < rev.length; i++) {
      newLink.append(rev[i]);
    }
    return newLink.head;
  }
}
let newLink = new LinkedList();
