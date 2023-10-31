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

//The lastIndexOf() Method
let text006 = "Hello planet earth, you are a great planet.";
console.log(text006.lastIndexOf("are"));

//The length Property
// The length property returns the length of a string.
let text007 = "Hello to the World!";
let a = "Total Length is:"
console.log(a, text007.length);

/*The localeCompare() Method

localeCompare() returns one of 3 numbers indicating the sort order.
-1 if sorted before
1 if sorted after
0 if equal
*/
let text008 = "world";
let text009 = "hello";
console.log(text008.localeCompare(text009));

//The match() Method
//match() searches for a match in a string.
//method returns null if no match is found
//method returns an array with the matches
let text10 = "The rain in SPAIN stays mainly in the plain";
console.log(text10.match("stays"));

//The repeat() Method
//repeat() returns a new string with a number of copies of a string:
//repeat() is not supported in Internet Explorer.
let text11 = "World is so beautiful";
console.log(text11.repeat(2));

//The replace() Method
//replace() searches a string for a value, and returns a new string with the specified value(s) replaced:
let text12 = "Visit Microsoft a very informative website microsoft";
console.log(text12.replace("Microsoft", "W3Schools"));


//The slice() Method
//slice() extracts a part of a string and returns the extracted part:
let text13 = "Hello Russia!";
console.log(text13.slice(0, 8));

//The search() Method
//Search() searches a string for a value and returns the position of the first match:
let text14 = "Mr. Blue has a blue house"
console.log(text14.search("has"));

//The Split() Method
//splits a string into an array of substrings.returns the new array.does not change the original string.
//If (" ") is used as separator, the string is split between words.
let text15 = "How are you doing today?";
console.log(text15.split(" "));

//The startsWith() Method
//startsWith() returns true if a string starts with a specified string:
let text16 = "Hello world, welcome to the universe.";
console.log(text16.startsWith("Hello"));

//The substr() Method
//substr() extracts a part of a string:
//Extracts a number of characters from a string, from a start index (position)
let text17 = "Hello world!";
console.log(text17.substr(6, 3));

//The substring() Method
//substring() extracts a part of a string:
//method extracts characters, between two indices (positions), from a string, and returns the substring.
//method extracts characters from start to end (exclusive).
//If start is greater than end, arguments are swapped: (4, 1) = (1, 4).Start or end values less than 0, are treated as 0.
let text18 = "Hello world!";
console.log(text18.substring(1, 5));

//The toLocaleLowerCase() Method
//toLocaleLowerCase() converts a string to lowercase letters, using current locale:
//The locale is based on the language settings of the browser.
let text19 = "Hello World!";
console.log(text19.toLocaleLowerCase());

//The toLocaleUpperCase() Method
//toLocaleupperCase() converts a string to uppercase letters, using current locale:
//The locale is based on the language settings of the browser.
let text20 = "Hello World!";
console.log(text20.toLocaleUpperCase());

//The toLowerCase() Method	Returns a string converted to lowercase letters
let text21 = "Hello World!";
console.log(text21.toLowerCase());

//The toUpperCase() Method	Returns a string converted to uppercase letters
let text22 = "Hello World!";
console.log(text22.toUpperCase());

//Returns a string or a string object as a string
let text23= "Hello Pakistan!";
 console.log(text23.toString());

 //The trim() Method
 //trim() removes whitespace from both sides of a string
 let text24 = "      Hello India!       ";
console.log(text24.trim());

//The trimEnd() Returns a string with removed whitespaces from the end
let text25 = "Hello India!    ";
console.log(text25.trimEnd());


//The trimStart() Returns a string with removed whitespaces from the end
let text26 = "     Hello India!";
console.log(text26.trimStart());


//The valueOf() Returns the primitive value of a string or a string object
let text27 = "Hello Blochistan!"
console.log(text27.valueOf());



// let a1 = "hamza"
// let a2 = a1.at(-1)
// console.log(a2," ",typeof(a2))