const LinkedList = require('../linked-list.js');
describe('Linked List', () => {
  it('constructor', () => {
    const list = new LinkedList();
    expect(list.head).toBeNull();
  });
  it('insert method adding new value' , () => {
    let newNode = new LinkedList() ;
    newNode.insert('test val');
    expect(newNode.head.value).toEqual('test val');
  });
  it('return true or false if the value is inculded or not', ()=> {
    let newNode = new LinkedList();
    newNode.insert('test val');
    expect(newNode.include('test val')).toBeTruthy();
  });
});
