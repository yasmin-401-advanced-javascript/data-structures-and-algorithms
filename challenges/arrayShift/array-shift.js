'use strict';

let theArray = [2,4,6,8];
let theValue = 5;


function insertShiftArray(array, value) {
  let newValueIndex =  Math.floor(array.length/2);
  array.splice(newValueIndex,0,value);
  return array;
}

let insertedArray = insertShiftArray(theArray, theValue);

console.log(insertedArray);