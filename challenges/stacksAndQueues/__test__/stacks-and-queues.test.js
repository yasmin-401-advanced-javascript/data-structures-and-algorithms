const StackAndQueues = require('../stacks-and-queues');

describe('Stack', () => {
  it('Can successfully instantiate an empty stack', () => {
    const stack = new StackAndQueues.Stack();
    expect(stack instanceof StackAndQueues.Stack).toBeTruthy();
  });

  describe('push()', () => {
    it('Can successfully push onto a stack', () => {
      const stack = new StackAndQueues.Stack();
      stack.push(1);
      expect(stack.top.value).toEqual(1);
      stack.push(2);
      expect(stack.top.value).toEqual(2);
    });
    it('Can successfully push multiple values onto a stack', () => {
      const stack = new StackAndQueues.Stack();
      stack.push(2);
      stack.push(6);
      expect(stack.peek()).toEqual(6);
    });
  });
  describe('pop()', () => {
    it('Can successfully pop off the stack', () => {
      const stack = new StackAndQueues.Stack();
      stack.push(1);
      expect(stack.pop()).toEqual({ value: 1, next: null });
      expect(stack.top).toEqual(null);
    });
    it('Can successfully empty a stack after multiple pops', () => {
      const stack = new StackAndQueues.Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.pop()).toEqual({value: 3, next: { value: 2, next: { value: 1, next: null } } });
      expect(stack.pop()).toEqual({value: 2, next:  { value: 1, next: null } });
      expect(stack.pop()).toEqual( { value: 1, next: null });
      expect(stack.top).toEqual(null);
    });
  });
  describe('peek()', () => {
    it('Can successfully peek the next item on the stack', () => {
      const stack = new StackAndQueues.Stack();
      stack.push(1);
      expect(stack.peek()).toEqual(1);
      stack.push(2);
      expect(stack.peek()).toEqual(2);
    });
    it('Calling pop or peek on empty stack raises exception', () => {
      const stack = new StackAndQueues.Stack();
      expect(stack.peek()).toEqual('this Stack is empty you should push value first.');
    });
    it('points to the new head after pop()', () => {
      const stack = new StackAndQueues.Stack();
      stack.push(2);
      stack.push(1);
      stack.push(4);
      stack.push(6);
      stack.pop();
      expect(stack.peek()).toEqual(4);
      stack.pop();
      expect(stack.peek()).toEqual(1);
    });
  });

  describe('isEmpty()', () => {
    it(' returns a boolean indicating whether or not the queue is empty', () => {
      const stack = new StackAndQueues.Stack();
      stack.push(1);
      expect(stack.isEmpty()).toEqual(true);
      stack.pop();
      expect(stack.isEmpty()).toEqual(false);
    });
  });
});
////////////////////////////////////
describe('Queue', () => {
  it('Can successfully instantiate an empty queue', () => {
    const stack = new StackAndQueues.Queue();
    expect(stack instanceof StackAndQueues.Queue).toBeTruthy();
  });

  describe('enqueue()', () => {
    it('Can successfully enqueue into a queue', () => {
      const stack = new StackAndQueues.Queue();
      stack.enqueue(1);
      expect(stack.front.value).toEqual(1);
      stack.enqueue(2);
      expect(stack.front.value).toEqual(2);
    });
    it('Can successfully enqueue multiple values into a queue', () => {
      const stack = new StackAndQueues.Queue();
      stack.enqueue(2);
      stack.enqueue(6);
      expect(stack.peek()).toEqual(6);
    });
  });
  describe('dequeue()', () => {
    it('Can successfully dequeue out of a queue the expected value', () => {
      const stack = new StackAndQueues.Queue();
      stack.enqueue(1);
      expect(stack.dequeue()).toEqual({ value: 1, next: null });
      expect(stack.front).toEqual(null);
    });
    it('Can successfully empty a stack after multiple dequeue', () => {
      const stack = new StackAndQueues.Queue();
      stack.enqueue(1);
      stack.enqueue(2);
      stack.enqueue(3);
      expect(stack.dequeue()).toEqual({ value: 3, next: { value: 2, next: { value: 1, next: null} } });
      expect(stack.dequeue()).toEqual({ value: 2, next: { value: 1, next: null} });
      expect(stack.dequeue()).toEqual({ value: 1, next: null});
      expect(stack.front).toEqual(null);
    });
  });
  describe('peek()', () => {
    it('Can successfully peek into a queue, seeing the expected value', () => {
      const stack = new StackAndQueues.Queue();
      stack.enqueue(1);
      expect(stack.peek()).toEqual(1);
      stack.enqueue(2);
      expect(stack.peek()).toEqual(2);
    });
    it('Calling dequeue or peek on empty queue raises exception', () => {
      const stack = new StackAndQueues.Queue();
      expect(stack.peek()).toEqual('this Queue is empty you should enqueue value first.');
    });
    it('points to the new head after dequeue()', () => {
      const stack = new StackAndQueues.Queue();
      stack.enqueue(2);
      stack.enqueue(1);
      stack.dequeue();
      expect(stack.peek()).toEqual(2);
      stack.dequeue();
      stack.dequeue();
      expect(stack.peek()).toEqual('this Queue is empty you should enqueue value first.');
    });
  });

  describe('isEmpty()', () => {
    it(' returns a boolean indicating whether or not the queue is empty', () => {
      const stack = new StackAndQueues.Queue();
      stack.enqueue(1);
      expect(stack.isEmpty()).toEqual(true);
      stack.dequeue();
      expect(stack.isEmpty()).toEqual(false);
    });
  });
});
