
function functionName (parameters) {
    
 fetch('https://reqres.in/api/users', {
    method:'post',
    headers:{
        'content-type': 'application/json'
    },
    body: JSON.stringify({
        name: 'New User',
        email: 'xyz@gmail.com',
        roll_Num:'31'
 })
})
.then((res) => {
    
    return res.json()
})
.then(data => console.log(data))
.catch((error) => console.log('Error'))
}
functionName()


// if(res.ok){
    //     console.log('SUCCSESS');
    // } 
    // else {
    //     console.log('Not Succsessful');
    // }
// .then(res => console.log(res))

// fetch('https://reqres.in/api/users', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'  // 'content-type' should be 'Content-Type'
//     },
//     body: JSON.stringify({
//         name: 'New User'
//     })  // Corrected the syntax here
// })
//     .then((res) => {
//         return res.json();
//     })
//     .then(data => console.log(data))
//     .catch((error) => console.log('Error'));




