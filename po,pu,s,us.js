// array push pop 

// array shift unshift 

let fruits = ["apple", "mango", "grapes"];
console.log(fruits);
//push 
fruits.push("banana");
console.log(fruits);
//pop 
let poppedFruit = fruits.pop();
console.log(fruits);
console.log("popped fruits is", poppedFruit);

//unshift 
fruits.unshift("banana");
fruits.unshift("myfruit");
console.log(fruits);

//shift 
let removedFruit = fruits.shift();
console.log(fruits);
console.log("removed fruits is ", removedFruit);



//my code
// let fruit = ["apple","bannana","grapes"];
// // //console.log(Array.isArray(fruit));
// // fruit.push("orange");
// //  console.log(fruit);
// // let popped = fruit.pop();
// // console.log(fruit);
// // console.log(popped);

// fruit.unshift("orange");
// console.log(fruit);

// let removed = fruit.shift();
// console.log(fruit,removed);