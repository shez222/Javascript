
// function (that function create object)
// 2.) add key value pair 
// 3.) object ko return krega 
function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old.`;
    };
    user.is18 =  function(){
        return this.age >= 18;
    }
    return user;
}

const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 19, "my address");
console.log(user1);
const is18 = user1.is18();
const about = user1.about();
console.log(about);


// my code 
//old method
// const obj1 = {
//     name: "sehrox",
//     age: 20,
//     about: function(){
//         console.log(`this is ${this.name}`);
//     },
//     is18:function(){
//         console.log(this.age >= 18 );
//     }
// }
// obj1.about();
// obj1.is18();

//now we make function to create objects
// function createUser(name,age,address,email) {
//     const user = {};
//     user.name = name;
//     user.age = age;
//     user.address =address;
//     user.email = email;
//     user.about =  function(){
//         console.log(`this is ${this.name}`);
//     };
//     user.is18= function(){
//         console.log(this.age >= 18 );
//     };

//     return user;
// }

// const user1 = createUser('shehroz','21','my add','s@gmail.com');
// console.log(user1);
// user1.about();
// user1.is18();
//this is better way to express objects 