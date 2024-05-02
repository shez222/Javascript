// closures
// closure : 30-40%
// analyse : 70-80%
// real example : 100%


// function can return functions

// function outerFunction(){
//     function innerFunction(){
//         console.log("hello world")
//     }
//     return innerFunction;
// }

// const ans = outerFunction();
// // console.log(ans);
// ans();


function printFullName(firstName, lastName){
    function printName(){
        console.log(firstName, lastName);
    }
    return printName; //when it is return it will return with firstName and lastName
}

const ans = printFullName("harshit", "sharma");
// console.log(ans);
ans();
