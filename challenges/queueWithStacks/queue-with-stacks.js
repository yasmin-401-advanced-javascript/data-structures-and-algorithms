const StackAndQueues = require('../stacksAndQueues/stacks-and-queues.js');

class PseudoQueue{
  constructor() {
    this.front = null;
  }

  enqueue(val){
    let stack = new StackAndQueues.Stack(val)
    console.log(stack)
    if(this.front === null){
      console.log('here')
      this.front = stack;
      let newVal = this.front;
      console.log('here', this.front)
      let str = ` [ ${newVal.value} ]  `;
      while(newVal.next){
        newVal = newVal.next;
        str += `-> [ ${newVal.value} ]  `;
      }
      return str
    }else{
      console.log('here1')
      stack.next= this.front ;
      this.front = stack;
    }
  }


}
module.exports = PseudoQueue;