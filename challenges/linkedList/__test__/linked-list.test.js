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
  it('Can successfully add a node to the end of the linked list', () => {
    const list = new LinkedList();
    list.append(3);
    list.append(5);
    expect(list.head.next.value).toEqual(5);
  });
  it('Can successfully add multiple nodes to the end of a linked list' , () => {
    let list = new LinkedList() ;
    list.append(3);
    list.append(5);
    list.append(7);
    expect(list.head.next.next.value).toEqual(7);
  });
  it('Can successfully insert a node before a node located i the middle of a linked list', ()=> {
    let list = new LinkedList();
    list.append(3);
    list.append(5);
    list.append(7);
    list.insertBefore(5,9);
    expect(list.head.next.value).toEqual(9);
  });
  it('Can successfully insert a node before the first node of a linked list', ()=> {
    let list = new LinkedList();
    list.append(3);
    list.append(5);
    list.append(7);
    list.insertBefore(3,9);
    expect(list.head.value).toEqual(9);
  });
  it('Can successfully insert after a node in the middle of the linked list', ()=> {
    let list = new LinkedList();
    list.append(3);
    list.append(5);
    list.append(7);
    list.insertAfter(5,9);
    expect(list.head.next.next.value).toEqual(9);
  });
  it('Can successfully insert a node after the last node of the linked list', ()=> {
    let list = new LinkedList();
    list.append(3);
    list.append(5);
    list.append(7);
    list.insertAfter(7,9);
    expect(list.head.next.next.next.value).toEqual(9);
  });
});
