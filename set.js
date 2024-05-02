// Sets (it is iterable)
// store data  
// sets also have its own methods
// No index-based access 
// Order is not guaranteed
// unique items only (no duplicates allowed)

// const items = ['item1', 'item2', 'item3'];
// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(5);
// numbers.add(6);
//-----------------------
// numbers.add(items);  
// numbers.add(items);  //we can not add same array two times because of duplicity this syntax will not add this array second time
//but if we do this
// numbers.add('item1', 'item2', 'item3']);  
// numbers.add('item1', 'item2', 'item3']);  //this is possible because both array added are present on different location in memory
//---------------------------
// if(numbers.has(1)){
//     console.log("1 is present")
// }else{
//     console.log("1 is not present")
// }
// for(let number of numbers){
//     console.log(number);
// }
// const myArray = [1,2,4,4,5,6,5,6];
// const uniqueElements = new Set(myArray);
// let length = 0;
// for(let element of uniqueElements){
//     length++;
// }

// console.log(length);

//my code
const myArray2 = [7,8];

const myArray = [1,2,4,4,5,6,5,6];
const sets = new Set(myArray);
console.log(sets);
console.log(myArray);
sets.add(myArray2[0]);
sets.add("shehroz");
sets.add(myArray);
console.log(sets);
// console.log(sets[0]);  //not possible because of no order
for (const q of sets) {
    console.log(q);
}
