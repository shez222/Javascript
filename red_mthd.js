// reduce 
const numbers = [1,2,3,4,5, 10];

// aim : sum of all the numbers in array 

const sum = numbers.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
}, 100);

console.log(sum);
// accumulator , currentValue,  return 
// 1               2              3 
// 3               3              6
// 6               4              10
// 10              5              15
// 15              10             25


const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 15000},
]

const totalAmount = userCart.reduce((totalPrice, currentProduct)=>{
    return totalPrice + currentProduct.price;
}, 0)

console.log(totalAmount);

// total price      currentValue     return 
// 0                {}                  12000
// 12000            22000                34000
// 34000            15000                49000


//-----------------------------------------------------
// //my code 
// const ar =[1,3,4,5];
// const ans1 = ar.reduce((item1,restitems)=>{
//     console.log(item1);
//     return item1 + restitems
// });

// const usercart = [
//     {price: 1000},
//     {price: 2000},
//     {price: 2000},
//     {price: 22200}
// ]

// const ans = usercart.reduce((item1,restitems)=>{
//     console.log(item1);
//       return item1 + restitems.price  //this will create an error because reduce is taking whole object in item1 and object + object is'nt possible that’s why we have to initialize value for item1 in end.
// });
// console.log(ans);
