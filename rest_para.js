// rest parameters 

// function myFunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is`, c);
// }

// myFunc(3,4,5,6,7,8,9);

function addAll(...numbers){
  let total = 0;
  for(let number of numbers){
      total = total + number;
  }
  return total;
}

const ans = addAll(4,5,4,2,10);
console.log(ans);


// // //my code
// // const myNum=(a,b,...c)=>{
// //     console.log(`a contain ${a}`);
// //     console.log(`b contain ${b}`);
// //     console.log(`c contain ${c}`);
// // }

// // myNum(4,54,543,4,3,3,2,"f");

// function myNum(...numbers) {
//   console.log(numbers);
//   console.log(Array.isArray(numbers));
//   let total = 0;   //if we use const then it will produce error
//   for (const number of numbers) {
//     total = total + number;  
//   }
//   return total;  
// }

// const ans =myNum(3,3234,32432,432432,245453,324);
// console.log(ans);