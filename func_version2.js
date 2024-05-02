const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >= 18;
    }
}
function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    return user;
}

const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 9, "my address");
const user2 = createUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = createUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
console.log(user1.about());
console.log(user3.about());


// my code
//in this version2 we will use func outside the object creating func
// const userMethods= {
//      about :  function(){
//         return`this is ${this.name}`;
//     },
//      is18: function(){
//         return this.age >= 18;
//     }
// }
// function createUser(name,age,address,email) {
//     const user = {};
//     user.name = name;
//     user.age = age;
//     user.address =address;
//     user.email = email;
//     //------reference of the func
//     user.about = userMethods.about;    //reference
//     user.is18 = userMethods.is18;      //reference
//     // user.about =  function(){
//     //     console.log(`this is ${this.name}`);
//     // };
//     // user.is18= function(){
//     //     console.log(this.age >= 18 );
//     // };

//     return user;
// }

// const user1 = createUser('shehroz','3','email1','add1');
// const user2 = createUser('abdul','25','email2','add2');
// const user3 = createUser('bilal','26','email3','add3');
// console.log(user1);
// console.log(user2);
// console.log(user3);
// console.log(user1.about());
// console.log(user2.about());
// console.log(user3.about());
// console.log(user1.is18());
// console.log(user2.is18());
// console.log(user3.is18());