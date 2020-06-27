'use strict';

const inter = require('../inerview-Ques.js');

describe('interview Question module' , () => {
  it('matrix sum with positive values' , () => {
    let arr = [[1,2,3] , [4,5,6] , [7,8,9] ];
    expect(inter(arr)).toEqual([6, 15, 24]);
  })

  it('matrix sum with negative values', () => {
    let arr = [ [1,-2,3] , [4,5,-6] , [7,-8,9] ];
    expect(inter(arr)).toEqual([2, 3, 8]);

  })

})
