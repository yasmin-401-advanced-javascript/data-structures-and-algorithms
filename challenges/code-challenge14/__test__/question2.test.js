'use strict';

const gameFun = require('../question2.js');

describe('EeneyMeeneyMineyMoe()', () => {

  it('test the return input if its constante with the game conditions', () => {
    let testArr = [1, 2, 3, 4, 5];
    expect(gameFun(testArr, 4)).toEqual(1);

  });
  it('test the return input if its constante with the game conditions', () => {
    let testArr = ['a', 'b', 'c', 'd', 'e'];
    expect(gameFun(testArr, 3)).toEqual('d');

  });
});
