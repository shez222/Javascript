// filter method 

const numbers = [1,3,2,6,4,8];



const evenNumbers = numbers.filter((number)=>{
    return number % 2 === 0;
});
console.log(evenNumbers);


// //my code 
// const numbers = [3,4,6,1,8];
// const isEven = (num)=>{
//     return num%2===0;
// };
// const ans = numbers.filter(isEven);
// console.log(ans);

// const ans2 = numbers.filter(num=>{
//     return num%3===0
// });
// console.log(ans2);