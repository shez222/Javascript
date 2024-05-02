// use const for creating array

// heap memory ["apple", "mango"] 0x11

const fruits = ["apple", "mango"]; // 0x11
// fruits = [];//this will create an error becaues we are trying to cahnge whole arr
fruits.push("banana");
console.log(fruits);