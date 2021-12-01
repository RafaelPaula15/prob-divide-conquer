// function sortedFrequency(arr, val) {
//     let count = 0;
  
//     for (let i = 0; i <= arr.length; i++)
//     if(arr[i] === val) {
//       count++;
//     }
//    return count;
//   }
  

function sortedFrequency(arr, val) {
  let count = 0;

  for (let i = 0; i <= arr.length; i++)
  if(arr[i] === val) {
    count++;
  }
  if (count === 0){
    return -1;
  }
 return count;
 


}


//   sortedFrequency([1,1,2,2,2,2,3],2) // 4
//   sortedFrequency([1,1,2,2,2,2,3],3) // 1
//   sortedFrequency([1,1,2,2,2,2,3],1) // 2
//   sortedFrequency([1,1,2,2,2,2,3],4) // -1


module.exports = sortedFrequency