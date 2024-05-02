// callback functions 

function myFunc2(name){
    console.log("inside my func 2")
    console.log(`your name is ${name}`);
}

function myFunc(callback){
    console.log("hello there I am a func and I can..")
    callback("harshit");
}


myFunc(myFunc2);


// //my code 
// function myFunc(name) {
//     console.log(`my name is ${name}`);
// }
// function myFunc2(callback) {
//     callback("shehroz");
//     console.log(`age 20`);
// }

// myFunc2(myFunc);