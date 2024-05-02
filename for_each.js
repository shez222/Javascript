// important array methods 

const numbers = [4,2,5,8];

// function myFunc(number, index){
//     console.log(`index is ${index} number is ${number}`);
// }

// numbers.forEach(function(number,index){
//     console.log(`index is ${index} number is ${number}`);
// });

// numbers.forEach(function(number, index){
//     console.log(number*3, index);
// })

const users = [
    {firstName: "harshit", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20},
]

// users.forEach(function(user){
//     console.log(user.firstName);
// });

// users.forEach((user, index)=>{
//     console.log(user.firstName, index);
// })

// for(let user of users){
//     console.log(user.firstName);
// }



//my code 
// const arr = [1,2,3,4,5];

// function multiply(number,index) {
//     console.log(`index is  ${index} , number is ${number}`);
// }
//tradional for loop
// for (let i = 0; i < arr.length; i++) {
//     multiply(arr[i],i)  
// }

//for each
// arr.forEach(multiply);
//--anotehr way
// arr.forEach(function mul(number,index) {
//     console.log(`index is  ${index} , number is ${number}`);
// });
//--anotehr way without naming a func
// arr.forEach(function (number,index) {   //no name for func direct
//     console.log(`index is  ${index} , number is ${number}`);
// });

//for each with arrow func
// arr.forEach((number,index) => {    
//     console.log(`index is  ${index} , number is ${number}`);
// });
// const users = [
//     {firstName: "harshit", age: 23},
//     {firstName: "mohit", age: 21},
//     {firstName: "nitish", age: 22},
//     {firstName: "garima", age: 20},
// ]
//ussing for each
// users.forEach((number) => {
//     console.log(number.firstName);
// });
//using for of
// for (const user of users) {
//     console.log(user.age);
// }