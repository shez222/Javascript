// splice method 
// start , delete , insert 

const myArray = ['item1', 'item2', 'item3'];

// delete
// const deletedItem = myArray.splice(1, 2);
// console.log("delted item", deletedItem);
// insert 
// myArray.splice(1, 0,'inserted item');

// insert and delete 
const deletedItem = myArray.splice(1, 2, "inserted item1", "inserted item2")
console.log("delted item", deletedItem);
console.log(myArray);


// // my code
// let del_item;
// const ar = [1,2,5,6];
// console.log(ar);
// // insert
// del_item =ar.splice(2,0,3,4)  //(start,delete,any numbers of item can be iserted)
// console.log(del_item);
// console.log(ar);
// //del
// del_item =ar.splice(5,5);
// console.log(del_item);
// console.log(ar);
// //insert & del
// del_item =ar.splice(4,1,5,6)
// console.log(del_item);
// console.log(ar);