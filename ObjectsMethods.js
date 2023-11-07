//Definition Method:
//In this example, fullName is a method that returns the full name of the person object.
const person = {
    firstName:"john",
    lastName : "desuza",
    fullName: function(){
        return this.firstName+" "+this.lastName;
    }
};

//Invocation Method: You can invoke an object's method using dot notation
//Note that when invoking the method, you use parentheses () at the end to call the function
let result = person.fullName();
console.log(result)




// [1,2,3,4,4,2,5,5,5,6,7,8,9];
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

// console.log(removeDuplicates(arr));