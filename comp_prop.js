// computed properties

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

// const obj = {
//     objkey1 : "myvalue1",
//     objkey2 : "myvalue2",
// }

// const obj = {
//     [key1] : value1,
//     [key2] : value2
// }

const obj = {};

obj[key1] = value1;
obj[key2] = value2;
console.log(obj);


//my code
// const key1 = "objkey1";
// const key2 = "objkey2";

// const value1 = "myval1";
// const value2 = "myval2";

// // const obj = {
// //     [key1] : [value1],  //data ka var ko bracket ma nahi likhna warna wo us ko array samjha ga sirf agar key bahra sa kisi var sa utha kar banani ho to key kay var ka sath square bracket lagata ha
// //     [key2] : [value2]

// // }
// // const obj = {      //right way to assin val through created var outside the object
// //     [key1]: value1,
// //     [key2]: value2
// // }
// //another way 
// const obj ={}
// obj[key1]= value1;
// obj[key2]= value2;
// // console.log(Object.keys(obj));
// console.log(obj);