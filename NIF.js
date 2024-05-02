// nested if else

// winning number 19 

// 19 your guess is right 
// 17 too low 
// 20 too high 

let winningNumber = 19;
let userGuess = +prompt("Guess a number");

if(userGuess === winningNumber){
    console.log("Your guess is right!!");
}else{
    if(userGuess < winningNumber){
        console.log("too low !!!");
    }else{
        console.log("too high !!!");
    }
}

// ///my code
// let winningNumber = 20;
// let userInput = +prompt("enter number");//without + it will take input in string form 
// if (userInput===winningNumber) {
//     console.log("win");
// } else {
//     if (userInput<winningNumber) {
//         console.log("too low");
//     } else {
//         console.log("too high");
//     }
// }