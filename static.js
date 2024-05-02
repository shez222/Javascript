// static methods and properties
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    static classInfo(){
        return 'this is person class';
    }
    static desc = "static property";
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
    eat(){
        return `${this.firstName} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}

const person1 = new Person("harshit", "sharma", 8);
// // console.log(person1.eat());
// const info = Person.classInfo();
// console.log(person1.desc);
// console.log(info);


// //mycode
// class CreateUser{
//     constructor(fisrtName,lastName) {
//         this.fisrtName = fisrtName;
//         this.lastName = lastName;
// }
//     static name ="shehroz"  //this property can only be call by class referenc 
//     static info(){   //this method can only be call by class referenc 
//         return `this is ${this.name}`
//     }
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
// console.log(CreateUser.info());  //calle dusing class reference

