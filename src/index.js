class Sorter {
  constructor() {
    // your implementation
    this.arr=[];
    this.compareFunction=((a,b)=>a-b);
    
  }

  add(element) {
    // your implementation
    this.arr.push(element);
  }

  at(index) {
    // your implementation
    return(this.arr[index]);
  }

  get length() {
    // your implementation
    return(this.arr.length);
  }

  toArray() {
    // your implementation
    return(this.arr);
  }

  sort(indices) {
    // your implementation
    var newArr = [];

    indices=indices.sort(this.compareFunction);

     for(var i=0;i<indices.length;i++){
       newArr.push(this.arr[indices[i]]);
     }

     newArr.sort(this.compareFunction);

     for(var j=0;j<newArr.length;j++){
       this.arr[indices[j]]=newArr[j];
     }     
}  

  setComparator(compareFunction) {
    // your implementation
    this.compareFunction=compareFunction;
  }
}

module.exports = Sorter;
/*
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}*/