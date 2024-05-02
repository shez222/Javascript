// function returning function 

function myFunc(){
    function hello(){
        return "hello world"
    }
    return hello;
}

const ans = myFunc();
console.log(ans());


// // //my code
// // function myFum() {
// //     function hello() {
// //         return "hello"
// //     }
// //     return hello; //in this we are returning func as complete with same ditto syntax
// //     // return hello(); //in this we are directly calling func and returning the answer of called func
// // }
// //  const ans =myFum()
// // console.log(ans());


// //another way to do above
// function myFum() {
//     return function hello() {
//         return "hello"
//     }
// }
//  const ans =myFum()
// console.log(ans());