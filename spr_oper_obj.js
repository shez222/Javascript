// spread operator
// const array1 = [1, 2, 3];
// const array2 = [5, 6, 7];

// // const newArray = [...array1, ...array2, 89, 69];
// const newArray = [..."123456789"];
// console.log(newArray);

// spread operator in objects
const obj1 = {
    key1: "value1",
    key2: "value2",
  };
  const obj2 = {
    key1: "valueUnique",
    key3: "value3",
    key4: "value4",
  };
  
  // const newObject = { ...obj2, ...obj1, key69: "value69" };
  // const newObject = { ...["item1", "item2"] };
  // const newObject = { ..."abcdefghijklmnopqrstuvwxyz" };
  // console.log(newObject);


// //my code
// // // speard operator in array
// // const array1 = [1,2,3,4]; 
// // const array2 = [5,6,7,8]; 
// // const newArray = [...array1,array2]//this will print complete array2 in new array instead of its element
// // const newArray = [...array1,...array2]//... spread operator
// // const newArray = [ ..."abc",..."1231434454"]//direct string can also be spreaded
// // console.log(newArray); 

// // speard operator in object
// const obj1 = {
//     key1 :"value1",
//     key2: "value2"
// };
// const obj2 = {
//     key3 :"value3",
//     key4: "value4"
// };
// // const newObj={...obj1,obj2}; //this will print complete obj2 in new array instead of its element\
// const newObj={...obj1,...obj2,key5:"value5"};//spread operator
// console.log(newObj);
// console.log(Object.keys(newObj));
