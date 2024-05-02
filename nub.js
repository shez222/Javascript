// undefined 
// null

let firstName;//undefined because no value assigned to variable
console.log(typeof firstName);
firstName = "Harshit";
console.log(typeof firstName, firstName);//string after assigning value

let myVariable = null;
console.log(myVariable);
myVariable = "harshit";
console.log(myVariable, typeof myVariable);
console.log(typeof null);
// bug , error 

// BigInt
let myNumber = BigInt(12);
let sameMyNumber = 123n;// n  for bigint
// console.log(myNumber);
// console.log(Number.MAX_SAFE_INTEGER); //range of int in js
console.log(myNumber+ sameMyNumber); //if we want to add two no types should be same


//my code
// let firstName;
// console.log(typeof firstName,firstName);
// firstName = "shehroz";
// console.log(typeof firstName,firstName);

// let firstName = null;
// console.log(typeof firstName);

// let number = 784652678687287873287;//wil print wrong because itis out of range
// number = 123;
// console.log(number);
// let number1 = 784652678687287873287n;
// console.log(number1);
// let number2 = BigInt(784652678687287873287);
// console.log(number2);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(number2+number1);
// console.log(number+number1);//it will make error type does not mmatch