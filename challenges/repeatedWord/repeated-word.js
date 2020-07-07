function repeatedWord(str) {
    if(str === '' && typeof str === 'string' ){
   return 'you need to pass a string'
    }else{
    let arr = str.split(' ')
    const theMap = new Map()
    for (let i = 0; i< arr.length; i++) {
      if(theMap.has(arr[i])) {
        return arr[i]
      }
      theMap.set(arr[i], i)
    }
    }
  }