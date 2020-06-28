// let arrTest = [ [1,2,3] , [4,5,6] , [7,8,9]];
const matrixSum = (arr) => {

  let total = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let f = 0; f < arr[i].length; f++) {
      sum += arr[i][f]
      // console.log(sum)  //1+2 = 3 > 3+ 3= 6 > 6 +4 =10

    }
    total[i] = sum
    console.log(total[i]) // 10,12,10
  }
  console.log(total)
  return total
};
module.exports = matrixSum
