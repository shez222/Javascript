// objects reference type  
// arrays are good but not sufficient 
// for real world data 
// objects store key value pairs 
// objects don't have index

// how to create objects 

// const person = {name:"Harshit",age:22};
const person = {
    name: "harshit",
    age: 22,
    hobbies: ["guitar", "sleeping", "listening music"]
}
console.log(person);

// how to access data from objects 
console.log(person["name"]);
// console.log(person["age"]);
// console.log(person.hobbies);

// how to add key value pair to objects
person["person"] = "male";
console.log(person);

// // my code

// const person= {     //best way to write an object
//     name:"shehroz",
//     age:20 
// };
// console.log(person);
// console.log(person.name);
// console.log(person.age);
// person.hobbbies = [1,2,3]; //addin element in object
// console.log(person.hobbbies);
// person.hobbbies.push(4);  //we can apply any array operation in array present in object
// console.log(person.hobbbies);
// person.gender = "male";
// console.log(person);
