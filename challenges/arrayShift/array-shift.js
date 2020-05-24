"use strict";

function insertShiftArray(arr, newInd) {
  let mid = Math.ceil(arr.length / 2);
  let newArr = new Array(arr.length + 1);
  for (let i = 0; i <= mid; i++) {
    if (i === mid) {
      newArr[i] = newInd;
    } else {
      newArr[i] = arr[i];
    }
  }
  for (let j = mid; j <= arr.length - 1; j++) {
    newArr[j + 1] = arr[j];
  }
  console.log(newArr);
  return newArr;
}

module.exports = insertShiftArray;
