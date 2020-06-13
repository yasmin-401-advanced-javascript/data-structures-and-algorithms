class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class AnimalShelter{
  constructor(){
    this.front = null;
  }

  enqueue(animal) {
    if(animal === 'cat' || animal === 'dog'){
      let node = new Node(animal);
      if (this.front === null) {
        this.front = node;
      } else {
        node.next = this.front;
        this.front = node;
      }
    }else{
      return 'only dogs and cats';
    }

  }
  dequeue(animal) {
    if(this.front){
      if (animal === 'cat' || animal === 'dog') {
        if(this.front.next === null){
          let poped = this.front;
          this.front = null;
          return poped
        }
        let current = this.front;
        let parent = null;
        while(current.next){
          parent = current;
          current= current.next
        }
        parent.next = null
        return current;
      }else {
        return null
      }
    }else{
      return 'shelter is empty'
    }

  }
}

module.exports = AnimalShelter;
