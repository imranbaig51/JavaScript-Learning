//Test1 Concat
let firstName = "Imran";
let lastName = "Anwar";
let fullName = firstName.concat(" ", lastName);
// let fullName = firstName+" "+lastName;
console.log(fullName);

//Loop Test
var a = 5;
for (let a = 0; a < 10; a++) {
  console.log(a);
}
console.log(a);

//Function Teat
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const target = 15;
function findNumber(arr, target) {
  let result = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      result = true;
    }
  }

  return result;
}

console.log(findNumber(arr, target)); // false

//Test to get Initials of a name
//   const namee = "Imran Baig";
// function getInitials(name) {
//   const words = name.split(" ");

//   let initials = "";

//   for (let i = 0; i < words.length; i++) {
//     // initials = initials + words[i][0]
//     initials += words[i][0];
//   }
//   return initials.toUpperCase();
// }
// const initials = getInitials("Imran Baig");
// console.log(initials);

let name = "Mani Baig"
let result;
for(let i=0; i<name.length; i++){
    if (i==0){
     result = name[i]
    }
    if (name[i]==" "){
        result+=name[i+1]
    }
}
console.log(result);


// string methods
// array methods
// pass by refrence and pass by value 
// non primitive data type


{
  let array=[0, 1,2, 2, 3, 4, 5, 6, 5]
  function arrayFunction(number){
    let max = number[0]
  // console.log(max);
    for(let i=1; i<array.length; i++)  {
  
    let element = number[i]
    // console.log(element);
      if(element < max){
        max = element
      }
      
    }
    return max 
  }
  
  let result= arrayFunction(array)
console.log(result);
}



// { 
//   let arrayNum= [22,25,40,60,80,100];
//   let result = largestNumber(arrayNum);
// function largestNumber(number){
//   let max = number[0];
//   // console.log(max);
//   for(let i = 0; i < number.length; i++){
//       let element = number[i];
//       // console.log(element);
//       if(element > max){
//           max = element;
//       }
//   }
//   return max;
// }
// console.log('The Highest Number is:',result);
// }




