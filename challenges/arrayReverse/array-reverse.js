function reverseArray(array) {
  let reversed = [];
  for (var i = array.length; i > 0; i--) {
    reversed.push(array.pop());
    // console.log('i = ', i)
  }

  return reversed;

}

module.exports = reverseArray
