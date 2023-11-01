// let arr = [1, 2, 2, 3, 4, 5]
// function uniqueData(number){
//     let result = data.reduce
//  for(i=0; i<arr.length; i++){
//     if() {
//         result > number
//         number = result

//     }
//  }
//  return result
// }
// uniqueData(arr)
// console.log(result);

// console.log(arr.indexOf());


// {
// let array=[0, 1,2, 2, 3, 4, 5, 6, 5]
//   function arrayFunction(number){
//     let max = number[0]
//   // console.log(max);
//     for(let i=1; i<array.length; i++)  {
  
//     let element = number[i]
//     // console.log(element);
//       if(element < max){
//         max = element
//       }
      
//     }
//     return max 
//   }
  
//   let result= arrayFunction(array)
// console.log(result);
// }

let arr = [1, 2, 2, 2, 3, 4, 5];

function removeDuplicates(arr) {
  const uniqueArray = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }
  
  return uniqueArray;
}
console.log(removeDuplicates(arr));
// const newArr = removeDuplicates(arr);
// console.log(newArr)