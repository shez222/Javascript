// array destructuring 
const myArray = ["value1", "value2", "value3","value4"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);
let [myvar1, myvar2, ...myNewArray] = myArray;
console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2);
console.log(myNewArray);

// //mycode
// const arr1=["1","2","3","4","5"];
// //simple way to store each element in var 
// // let var1 = arr1[0]
// // let var2 = arr1[1]
// // let var3 = arr1[2]
// // console.log(var1,var2,var3,arr1);
// //destructuring way

// // const [var1,var2,var3]= arr1;
// // console.log(var1,var2,var3,arr1);
// // const [var1,,var2]= arr1; //to store 1st ele in 1st var and 3rd ele in 2nd var
// // console.log(var1,var2);
// const [var1,...array1] = arr1;//... dot are representation for an array. to store remaining elements in array
// console.log(var1,array1);