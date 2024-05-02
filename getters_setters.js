// getter and setters 
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}


const person1 = new Person("harshit", "sharma", 5);
// console.log(person1.fullName());
// console.log(person1.fullName);
// person1.fullName = "mohit vashistha";
// console.log(person1);

// //my code
// class CreateUser{
//     constructor(fisrtName,lastName) {
//         this.fisrtName = fisrtName;
//         this.lastName = lastName;
// }
//     get fullName(){
//         return `${this.fisrtName} ${this.lastName}`
//     //    return this.fisrtName+" "+this.lastName  /can also be done like thiis
//     }
//     //set method 1  this methosd to change name
//     // setName(fisrtName,lastName){
//     //     this.fisrtName = fisrtName;
//     //     this.lastName = lastName;
//     // }
//     //set method 2 this methosd to change name this method will take full name and then split them into firstname and lastname then change firstname and lastname
//     set fullName(fullName){
//         const [fisrtName,lastName] =fullName.split(" ") ;
//         this.fisrtName = fisrtName;
//         this.lastName = lastName;
//     }
// }
// const name1 = new CreateUser("shehroz","bilal");
// // name1.setName("abdul","bilal")  //with method1
// name1.fullName = "muhammad bilal"  //using set method 2
// console.log(name1.fullName);