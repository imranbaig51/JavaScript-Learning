//To String
//returns a number as a string
let num = 15;
console.log(typeof num.toString());//After Using toString() Method
console.log(typeof num);//Without Using toString() Method

//The toExponential() method is a built-in JavaScript method that is used to represent a number in exponential notation (also known as scientific notation). This method converts a number into a string representation using exponential notation, which is useful when you want to display very large or very small numbers in a more compact and readable format.
{let num = 12345.6789;
let numString = num.toExponential(2);
console.log(numString); // Outputs "1.23e+4"
 }

 //The toPrecision() Method formats a number to a specified length
 {
    let num = 13.2344
    console.log(num.toPrecision(2));
 }

//The valueOf() Method 
//ValueOf() returns the primitive value of a number

 {
    let num = 15;
    console.log(num.valueOf());
 }