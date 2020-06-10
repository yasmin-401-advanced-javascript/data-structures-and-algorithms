function EeneyMeeneyMineyMoe(arr, k) {
  let arr2 = [...arr];
  let arr3 = [];
  let prev = 0;
  for (let j = 0; j < arr.length; j++) {
    arr3 = [];

    let removed = k % (arr2.length - 1);
    if (removed === 0) {
      removed = k;
    }
    if (prev !== 0) {
      removed = removed - (arr2.length - prev);
    }
    prev = arr2.length - removed;
    for (let i = 0; i < arr2.length; i++) {
      if (i !== removed - 1) {
        arr3.push(arr2[i]);
      }
    }
    arr2 = [...arr3];
  }
//   console.log('return', arr2[0]);
  return arr2[0];
}

module.exports = EeneyMeeneyMineyMoe;
