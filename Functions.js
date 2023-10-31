//A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
//Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
//The parentheses may include parameter names separated by commas:
//(parameter1, parameter2, ...)

function myFunction(p1, p2) {
  return p1 * p2;
}

console.log(myFunction(4, 3));


//Arrow Function
greet = () => {
  console.log("Good Morning");
};
greet();


//Test of Funtions
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const target = 15;
function findNumber(arr, target) {
  let result = false
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
       result = true;
    }
  }

  return result;
}

console.log(findNumber(arr, target)); // false
