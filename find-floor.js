function findFloor(arr, val) {
    let result = val - 1;
  
    for(let i = 0; i < arr.length; i++)
    if(arr[i] === result) {
      return result ;
    }
   
  return -1;
  }
//   findFloor([1,2,8,10,10,12,19], 9) // 8
//   findFloor([1,2,8,10,10,12,19], 20) // 19
//   findFloor([1,2,8,10,10,12,19], 0) // -1  

module.exports = findFloor