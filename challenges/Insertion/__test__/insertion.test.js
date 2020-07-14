'use strict';
const insertionFun = require('../insertion.js');

describe('test insertion function', () => {
    it('input is an array', () => {
      let testArr = [1, 2, 3, 4];
      expect(Array.isArray(testArr));
    });
  
    it('check the array lenght', () => {
      let testArr = [1, 2, 3, 4];
      expect(testArr).toHaveLength(4);
    });
  
    it('check if it retun sorted array', () => {
      expect(insertionFun([5,2,7,6,9,20,12])).toBe([ 2, 5, 6, 7, 9, 12, 20 ]);
    });
    it('check if it retun Reverse-sorted:', () => {
        expect(insertionFun([20,18,12,8,5,-2])).toBe([ -2, 5, 8, 12, 18, 20 ]);
      });
    it('check if it retun Few uniques::', () => {
        expect(insertionFun([5,12,7,5,5,7])).toBe([[ 5, 5, 5, 7, 7, 12 ]]);
      });
    it('check if it retun Nearly-sorted:', () => {
        expect(insertionFun([2,3,5,7,13,11])).toBe([ 2, 3, 5, 7, 11, 13 ]);
      });
  });
  