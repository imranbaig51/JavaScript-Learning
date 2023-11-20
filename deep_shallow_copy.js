let obj = {
    namee: "haseeb",
    age:23 
}

let obj2 = Object.assign({}, obj)
obj2.class="xyz"
console.log(obj2);


//Shallow Copy
const originalObject = { key1: 'value1', key2: { nestedKey: 'nestedValue' } };

// Shallow copy using Object.assign
const shallowCopyObject = Object.assign({}, originalObject);

// Modify the shallow copy
shallowCopyObject.key2.nestedKey = 'newNestedValue';

console.log(originalObject);   // { key1: 'value1', key2: { nestedKey: 'newNestedValue' } }
console.log(shallowCopyObject);