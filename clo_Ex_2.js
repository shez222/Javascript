// function myFunction(power){
//     return function(number){
//         return number ** power
//     }
// }
// const square = myFunction(2);
// const ans = square(3);
// console.log(ans);


// const cube = myFunction(3);
// const ans2 = cube(3);
// console.log(ans2);


function myFunction(power){
    return function(number){
        return number ** power
    }
}
const square = myFunction(2);
const ans = square(3);
console.log(ans);


const cube = myFunction(3);
const ans2 = cube(3);
console.log(ans2);

// //my code
// function power(p) {
//     return function (no) {
//         return no**p
//     }
// }
// const sq = power(2);
// const ans = sq(4)
// console.log(ans);

// const pow = p =>no => no**p

// const cube = pow(3)
// const ans2 = cube(3);
// console.log(ans2);