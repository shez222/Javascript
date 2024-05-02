// super 
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
    constructor(name, age, speed){
        super(name,age);
        this.speed = speed;
    }

    run(){
        return `${this.name} is running at ${this.speed}kmph`
    }
} 
// object / instance 
const tommy = new Dog("tommy", 3,45);
console.log(tommy.run());


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

// // const lion = new Animal("lion","2");
// // console.log(lion.eat());
// //if we had to define speed in dog than we use super keyword in constructor of dog to take variables from animal
// class Dog extends Animal{
//     constructor(name,age,speed) {
//         super(name,age);
//         this.speed = speed
//     }
//     run(){
//         return `${this.speed}`
//     }
// }

// const dog1 = new Dog("tommy","2","20");
// console.log(dog1.eat())
// console.log(dog1.run());