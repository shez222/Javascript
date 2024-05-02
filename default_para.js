// default parameters 

// function addTwo(a,b){
//     if(typeof b ==="undefined"){
//         b = 0;
//     }
//     return a+b;
// }

function addTwo(a,b=0){
    return a+b;
}

const ans = addTwo(4, 8);
console.log(ans);


// // my code
// // function addTwo(a,b) {
// //     if(typeof b === "undefined"){
// //         b = 0;
// //     }
// //     return a+b;
// // }
// // const adds = addTwo(3,5);
// // console.log(adds);

// function addTwo(a,b=4) {

//     return a+b;
// }
// const adds = addTwo(3);
// console.log(adds);