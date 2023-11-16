let p = new Promise((resolve, reject) => {
    console.log("Promise is still pending")
    setTimeout(() => {
        console.log("I am a promise and i am fulfilled");
        resolve(true)
        // reject(new Error("i am an error"))
    }, 5000);
})

console.log(p);