// methods
// function inside object

function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName : "harsh",
    age: 8,
    about: personInfo
}
const person2 = {
    firstName : "mohit",
    age: 18,
    about: personInfo
}
const person3 = {
    firstName : "nitish",
    age: 17,
    about: personInfo
}

person1.about();
person2.about();
person3.about();




//my code
// const person = {
//     firstName: "shehroz",
//     age:21,
//     about:function() {               //method
//         console.log(`my name ${this.firstName} and my age ${this.age}`);
//     }
// }
// person.about();


// const info = function() {               
//     console.log(`my name ${this.firstName} and my age ${this.age}`);
// }
// const person1 = {
//     firstName: "shehroz",
//     age:21,
//     about: info   
// }
// const person2 = {
//     firstName: "abdullah",
//     age:21,
//     about: info   
// }
// const person3 = {
//     firstName: "sherys",
//     age:21,
//     about: info   
// }

// // info(); //this will prinnt undefined in name and age because no reference object is present from where the func had to get value
// // console.log(person.about);  //this will print complete function
// // console.log(person.about()); //this will use the func
// //---------------
// //this will use the info func for each object independently a/c the information in each object
// person1.about();
// person2.about();
// person3.about();

