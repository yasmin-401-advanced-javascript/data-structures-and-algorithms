const LinkedList = require('../ll-merge.js');

describe('Linked List', () => {
  it('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', ()=> {
    let list = new LinkedList();
    let list2 = new LinkedList
    list.append(1);
    list.append(3);
    list.append(5);
    list.append(7);
    list2.append(2);
    list2.append(4);
    list2.append(6);
    list2.append(8);
    expect(list.mergeLists(list , list2)).toEqual('head -> [1] -> [2] -> [3] -> [4] ->   [5] -> [6] ->   [7] -> [8] ->  X');
  });
});
