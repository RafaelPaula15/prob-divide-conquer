function findRotationCount(arr) {
    lowest = 0;
  
    for(let i = 0; i < arr.length; i++)
    if(arr[i] < arr[lowest]) {
    lowest = i;
    }
   return lowest;
  }

//   findRotationCount([15, 18, 2, 3, 6, 12]) // 2
// findRotationCount([7, 9, 11, 12, 5]) // 4
// findRotationCount([7, 9, 11, 12, 15]) // 0
module.exports = findRotationCount