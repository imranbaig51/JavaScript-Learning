const myArr=[0, 1, 2, 3, 4, 5]
const myHeros=["Superman", "Spidernman"]
const myArr2= new Array (1,2,3,4)
//New Array is keyword
console.log(myArr[0])


//Array Methods
myArr.push(6)
myArr.push(7)
// push insert number to the last of array
myArr.pop()
//pop removes the last number of array
myArr.unshift(7)
//unshift adds the number at the start of array and shift all data to the next Note! it may causes to slow down computer and takes load
myArr.shift()
// Shift works same as pop but shift removes 1st number of array
console.log(myArr.includes(9));
// With the help of includes we can ask the question that is 9 exist in my array snd i will get answer in boolean type true or false 
console.log(myArr.indexOf(3));
// we can know with the help of index that in which index that particular item located

// console.log(myArr);

const newArr = myArr.join()
console.log(newArr);
console.log(typeof newArr);
//join add data to new variable and convert it into string data type

const mynewarray = myArr.slice(1, 3)
console.log(mynewarray);

// Slice method returns selected elements in an array, as a new array.method selects from a given start, up to a (not inclusive) given end.method does not change the original array

myArr.splice( 0,3)
console.log(myArr);
//Splice method adds and/or removes array elements. overwrites the original array manuplate the orignal array


