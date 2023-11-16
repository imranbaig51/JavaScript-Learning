
function name() {
    
    const abc = fetch ("https://api.agify.io?name=meelad").then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error))
}
name()


//Callback Function
function greet(name, callback) {
    console.log('Hello, ' + name + '!');
    callback();
  }
  function sayGoodbye() {
    console.log('Goodbye!');
  }
  
  greet('John', sayGoodbye);