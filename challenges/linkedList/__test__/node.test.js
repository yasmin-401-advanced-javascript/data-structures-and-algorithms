const Node = require('../node.js');
describe('Node Module', () => {
  it('constructor() test with string value', () => {
    const value = 'test value';
    const node = new Node(value);
    expect(node.value).toEqual(value);
    // console.log('here is the node:' , node);
    // Node { value: 'test value', next: null }
    // console.log('here is the value:' , value);
    // test value
    // console.log('here is the next:' , node.next);
    // null
    expect(node.next).toBeNull();
  });
  it('constructor() test with number value', () => {
    const value = 5;
    const node = new Node(value);
    expect(node.value).toEqual(value);
    // console.log('here is the node:' , node);
    // Node { value: 5, next: null }
    // console.log('here is the value:' , value);
    // 5
    // console.log('here is the next:' , node.next);
    // null
    expect(node.next).toBeNull();
  });
});
