class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}

class Dog extends Animal{
    
} 

const tommy = new Dog("tommy", 3);
console.log(tommy);
console.log(tommy.isCute());

// //my code
// class Animal{
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }

//     eat(){
//         return `${this.name} is eating`
//     }
// }

// const lion = new Animal("lion","2");
// console.log(lion.eat());

// class dod extends Animal{

// }

// const dog1 = new Animal("tommy","2");
// console.log(dog1.eat());