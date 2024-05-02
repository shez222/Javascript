// param destructuring 

// object 
// react 

const person = {
    firstName: "harshit",
    gender: "male",
    age: 500
}

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }


function printDetails({firstName, gender, age}){
    console.log(firstName);
    console.log(gender);
    console.log(age);
}

printDetails(person);


//my code
// const obj1  = {
//     name: "shehroz",
//     gender:"male",
//     age: 5000
// }

// function persnoDeatail({name,gender,age}) {
//     console.log(name);
//     console.log(gender);
//     console.log(age);
// }

// persnoDeatail(obj1);