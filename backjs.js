 //the function that can take other functions as argument are called higher order function.

//SYNCHRONOUS CALLBACK FUNCTION

/*function parentFunction(name, callback){
    callback();
    console.log("Hey "+name);
}

function randomFunction(){
    console.log("Hey I am callbackFunction");
}

parentFunction("Random String",randomFunction);*/


//ASYNCHRONOUS CALLBACK FUNCTION
// 1 way
/*function parentFunction(name, callback){
    setTimeout(callback,1000);
    console.log("Hey "+name);
}

function randomFunction(){
    console.log("Hey I am callbackfunction");
}

parentFunction("Random String",randomFunction);*/


// 2 way
// function parentFunction(name, callback){
//     setTimeout(callback,1000);
//     console.log("Hey "+name);
// }

// parentFunction("Random String",function(){
//     console.log("Hey I am callbackfunction");
// });
//  //setTimeout function
// const delayedFunction = () => {
//     console.log('Delayed function executed!');
// };

// setTimeout(delayedFunction,2000);
//  //function to be executed at intervals
// function repeatedFunction() {
//     console.log('Executing repeated function...');
// }

// //set an interval (execute repeatedFunction every 1000 milliseconds)
// const intervalId = setInterval(repeatedFunction,1000);

// //After some time(e.g, 5000 millisecond),stop the interval
// setTimeout(() => {
//     clearInterval(intervalId);
//     console.log('Interval stopped.');
// },5000);
//  //setInterval function
// const repeatedFunction = () => {
//     console.log('Repeated function executed!');
// };

// const intervalId = setInterval(repeatedFunction,1000);