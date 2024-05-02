// new keyword 
// 1.) this = {}
// 2.) return {} 
//

// __proto__ 
// // official ecmascript document
// [[prototype]]

// constructor function 
function CreateUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function (){
    return this.age >= 18; 
}
CreateUser.prototype.sing = function (){
    return "la la la la ";
}


const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
const user2 = new CreateUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = new CreateUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
console.log(user1);
console.log(user1.is18());






//my code
// function User(name,age) {
//     this.name = name;
//     this.age = age;
// }
// const obj1 = new User("shehroz",15);
// User.prototype.about= function(){
//     return `${this.name}`
// }
// console.log(obj1.about());
// console.log(User.prototype);


// function CreateUser(name,age,address,email) {
//     this.name = name;
//     this.age = age;
//     this.address =address;
//     this.email = email;
// }
// console.log(CreateUser.prototype);
// CreateUser.prototype.about =  function(){
//     return`this is ${this.name}`;
// }
// CreateUser.prototype.is18= function(){
//     return this.age >= 18;
// }
// const user1 = new CreateUser('shehroz','3','email1','add1');
// const user2 = new CreateUser('abdul','25','email2','add2');
// const user3 = new CreateUser('bilal','26','email3','add3');
// console.log(user1.__proto__);
// console.log(user2.__proto__);
// console.log(user3.__proto__);
// console.log(user1);
// console.log(user2);
// console.log(user3);
// console.log(createUser.prototype);
// console.log(user1.about());
// console.log(user2.about());
// console.log(user3.about());
// console.log(user1.is18());
// console.log(user2.is18());
// console.log(user3.is18());