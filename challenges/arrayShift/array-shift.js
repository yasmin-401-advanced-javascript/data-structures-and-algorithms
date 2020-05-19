'use strict';



function insertShiftArray(arr, val) {
    let flag = Math.ceil(arr.length / 2);
    // console.log(flag)
    let newArr = new Array(arr.length + 1);
    for (let i = 0; i <= flag; i++) {
        if (i === flag) {
            newArr[i] = val;
        } else {
            newArr[i] = arr[i];
        }
    }
    for (let x = flag; x <= arr.length - 1; x++) {
        newArr[x + 1] = arr[x];
    }
    return newArr;
}
// console.log("shift");


module.exports = insertShiftArray;