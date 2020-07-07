class Node {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
  
  class BinTree {
    constructor(root){
      this.root = root;
    }
  
    preOrder(){
      let data = [];
      let _traversal = (node)=>{
        data.push(node.value);
        if(node.leftChild) _traversal(node.leftChild);
        if(node.rightChild) _traversal(node.rightChild);
      };
      _traversal(this.root);
      return data;
    }
  
    matchin(tree1, tree2)
    {
      var matched = [];
      while( tree1.length > 0 && tree2.length > 0 )
      {  
        if      (tree1[0] < tree2[0] ){ tree1.shift();
        }
        else if (tree1[0] > tree2[0] ){ tree2.shift(); 
        }
        else 
        {
          matched.push(tree1.shift());
          tree2.shift();
        }
      }
    
      return matched;
    }
    insertion(arr){
      for(let i = 1;i < arr.length;i++){
        let j = i - 1;
        let temp = arr[i];
        while(j >= 0 && temp < arr[j]){
          arr[j + 1] = arr[j];
          j = j - 1;
        }
        arr[j + 1] = temp;
      }
      return arr;
    }
  
  }