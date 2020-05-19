'use strict';



const shift = require('../array-shift.js');

describe('list', () => {

    it('inputs is an array of number', () => {
        let testArr = [1, 2, 3, 5];
        expect(shift(testArr, 4).length).toEqual(5);

    });

    it('increse the array length', () => {
        let testArr = [1, 2, 3];
        expect(shift(testArr, 4).length).toEqual(4);
    });

    it('inputs can be string also ', () => {
        let testArr = ['a', 'b', 'c'];
        expect(shift(testArr, 'd').length).toEqual(4);
    });



});