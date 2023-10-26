//Methods of Strings
// concAt
let text1 = "sea";
let text2 = "food";
console.log(text1.concat(text2))

//charAt
let text = "HELLO WORLD";
console.log(text.charAt(0));

// charCodeAt
let text001 = "HELLO WORLD";
console.log(text001.charCodeAt(0))

//Constructor
//Constructor property returns the function that created the String prototype
let message = "1,2,3";
console.log(message.constructor);

// The endsWith() Method
// endsWith() returns true if a string ends with a specified string, otherwise false
let text002 = "Hello world";
console.log(text002.startsWith("Hello"));

// String.fromCharCode()
// String.fromCharCode() converts Unicode values to strings
let text003 = String.fromCharCode(72, 69, 76, 76, 79);
console.log(text003);

// The includes() Method
// includes() returns true if a string contains a specified string
let text004 = "Hello world, welcome to the universe.";
console.log(text004.includes("world"));

// The indexOf() Method
// indexOf() returns the position of the first occurrence of a value in a string
let text005 = "Hello world, welcome to the universe.";
console.log(text005.indexOf("welcome"));