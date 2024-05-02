// how to clone array 

// how to concatenate two arrays

let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];
// let array2 = array1.slice(0).concat(["item3", "item4"]);
// let array2 = [].concat(array1,["item3", "item4"]);
// new way 
// spread operator
let oneMoreArray = ["item3", "item4"]
let array2 = [...array1, ...oneMoreArray];

array1.push("item3");

console.log(array1===array2);
console.log(array1)
console.log(array2)

// my code 
// let ar1  = ["item1","iteme2"];
// // let ar2  = ["item1","iteme2"];// dumb method to clone
// //let ar2 = ar1.slice(0);//fast method
// // let ar2 = [].concat(ar1);//anaother method to clone
// //new method
// // let ar2 =[...ar1]//spreade operator

//concatenatione
// let ar1  = ["item1","iteme2"];
// // let ar2  = ["item1","iteme2"];// dumb method to clone
// // let ar2 = ar1.slice(0).concat("item 4","item5");//fast method
// // let ar2 = [].concat(ar1,"item 4","item5");//anaother method to clone
// //new method
// let newArray = ["item 4","item5"];
// let ar2 =[...ar1,...newArray,"item 4","item5"]//spreade operator
// ar2.push("item 4","item5")
// console.log(ar1===ar2);
// console.log(ar1);
// console.log(ar2);