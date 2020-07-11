
class Edge {
    constructor(node, weight = 0) {
      this.vertex = node;
      this.weight = weight;
    }
  }
  
  
  class Graph{
    constructor(){
      this._adjancyList = new Map();
    }
    addNode(node){
      this._adjancyList.set(node, []);
      return this._adjancyList.get(node);
    }
  
    addEdge(start,end,weight){
      if (!this._adjancyList.has(start) || !this._adjancyList.has(end)) {
        return 'Vertex Not Found!!!';
      }
      const adjacencies = this._adjancyList.get(start);
      adjacencies.push(new Edge(end, weight));
    }
  
  
    getNeighbors(node){
      if (this._adjancyList.has(node)) {
        return this._adjancyList.get(node);
      } else {
        return 'there is No Neighbors ';
      }
    }
  
    size(){
      return this._adjancyList.size;
    }
  
  }
  
  