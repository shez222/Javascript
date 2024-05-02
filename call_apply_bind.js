//mycode
//1st way func into one object and calling that func in other object
// const obj1 = {
//     name:"shehroz",
//     age:21,
//     about: function(first_hobby,second_hobby){
//         console.log(`my name is ${this.name} and my age is ${this.age}. And my hobbies are ${first_hobby},${second_hobby}`);
//     }
// }
// const obj2 = {
//     name:"abbdul",
//     age:24
 
// }
//2ndway func outside
 const about= function(first_hobby,second_hobby){
    console.log(`my name is ${this.name} and my age is ${this.age}. And my hobbies are ${first_hobby},${second_hobby}`);
}
const obj1 = {
    name:"shehroz",
    age:21,
}
const obj2 = {
    name:"abbdul",
    age:24
 
}
//call
// obj1.about.call(obj2,"cricket","football");// when func into one object and calling that func in other object
about.call(obj1,"cricket","football");  //func outside
about.call(obj2,"cricket","football");  //func outside

// //apply 
// obj1.about.apply(obj2,["cricket","football"]);// when func into one object and calling that func in other object
about.apply(obj1,["cricket","football"]);  //func outside
about.apply(obj2,["cricket","football"]);  //func outside

// //bind
// const f = obj1.about.bind(obj2,"cricket","football");// when func into one object and calling that func in other object
// f();
const f1 = about.bind(obj1,"cricket","football");  //func outside
f1();
const f2 = about.bind(obj2,"cricket","football");  //func outside
f2();

