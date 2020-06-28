'use strict';

function insertion (arr) {
    for (let i = 1; i < arr.length; i++) {
      let j = i - 1
      let tmp = arr[i]
      while (j >= 0 && arr[j] > tmp) {
        arr[j + 1] = arr[j]
        j--
      }
      arr[j+1] = tmp
    }
    return(arr);
  }

module.exports = insertion;