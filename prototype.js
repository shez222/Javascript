function hello(){
    console.log("hello world");
}

// javascript function ===> function  + object

// console.log(hello.name);

// you can add your own properties 
// hello.myOwnProperty = "very unique value";
// console.log(hello.myOwnProperty);

// name property ---> tells function name;

// function provides more usefull properties.


// console.log(hello.prototype); // {}

// only functions provide prototype property

hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.name = "shehroz";
hello.prototype.avout = function(){
    return "kdjf"
}
hello.prototype.sing = function(){
    return "lalalla";
};
console.log(hello.prototype.sing());
console.log(hello.prototype.avout());
console.log(hello.prototype.name);
