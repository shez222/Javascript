// how to iterate object 
const person = {
    name: "harshit",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]
}

// for in loop 
// Object.keys 

// for(let key in person){
//     // console.log(`${key} : ${person[key]}`);
//     console.log(key," : " ,person[key]);
// }

// console.log(typeof (Object.keys(person)));
// const val = Array.isArray((Object.keys(person)));
// console.log(val);

// for(let key of Object.keys(person)){
//     console.log(person[key]);
// }

// -----------------------------------------------------------------
//  my code
// const key = "email";
// const person = {
//     name: "harshit",
//     age: 22,
//     "person hobbies": ["guitar", "sleeping", "listening music"]

// }
// const ar1 =[1,2,3,4,5]
// //for in loop
// for (const key in person) {
//     console.log(person[key]); //this is how we can accces data in keys
// }
// console.log("-----------------------------------");
// for (const key in person) {
//     console.log(`${key}:${person[key]}`); //this is how we can accces data in keys
// }
// console.log("-----------------------------------");
// for (const key in person) {
//     console.log(key,":",person[key]); //this is how we can accces data in keys
// }

//object.key() //gives keys of an object in form of array
// console.log(Object.keys(person),typeof (Object.keys(person)));
// console.log(Array.isArray(Object.keys(person)));

//for of loop

// for (const keys of Object.keys(person)) {
//     console.log(person[keys]);      //use bracket notation to acces data in keys
// }
// console.log("-----------------------------------");
// ar2 = ar1.reverse()
// console.log(ar2);
// for (const num of ar2) {
//     console.log(ar2[num]);
//}
// using for loop
// 1st method
// const ar3  = Object.keys(person);
// for (let i = 0; i < ar3.length; i++) {
//     console.log(person[ar3[i]]);
// }
// // 2nd method
for (let i = 0; i < Object.keys(person).length; i++) {
    console.log(person[Object.keys(person)[i]]);
}
//while loop
// let i = 0;
// while (i< Object.keys(person).length) {
//     console.log(person[Object.keys(person)[i]]);
//     i++;
// }