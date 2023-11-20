//Promise fulfilled as resolve or rejected


let p1 = new Promise((resolve, reject) => {
    // console.log("Promise is still pending")
    setTimeout(() => {
        console.log("I am a promise and i am fulfilled");
        resolve(true)
        // reject(new Error("i am an error"))
    }, 3000);
})

let p2 = new Promise((resolve, reject) => {
    // console.log("Promise is still pending")
    setTimeout(() => {
        console.log("I am a promise and i am Rejected");
        // resolve(true)
        reject(new Error("i am an error"))
    }, 10000);
})
p1.then((value) => {
     console.log(value);
})
p2.catch(() => {
    console.log("some error accurd");
})

//This Promise is Pending
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("done");
    }, 1000);
})
promise.catch((alert) => {
    console.log(alert);
})  
console.log(promise);