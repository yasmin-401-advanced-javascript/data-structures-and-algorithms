function leftJoin(table1, table2){

    let matchedKey = [];
    let keys = Object.keys(table1);
  
    for (let i = 0; i < keys.length; i++) {
      if (table2[keys[i]]) {
        matchedKey.push([keys[i], table1[keys[i]], table2[keys[i]]]);
      } else {
        matchedKey.push([keys[i], table1[keys[i]], null]);
      }
    }
    return matchedKey;
  }