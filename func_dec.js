function singHappyBirthday(){
    console.log("happy birthday to you ......");
}

function sumThreeNumbers(number1, number2, number3){
    return number1 + number2 + number3;
}



// isEven
// input : 1 number 
// output : true , false 

// function isEven(number){
//     return number % 2 === 0;
// }

// console.log(isEven(4));

// function 
// input : string 
// output: firstCharacter 

// function firstChar(anyString){
//     return anyString[0];
// }

// console.log(firstChar("zbc"));

// function 
// input : array, target (number)
// output: index of target if target present in array 

function findTarget(array, target){
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
const myArray = [1,3,8,90]
const ans = findTarget(myArray, 4);
console.log(ans);

// my code

// function stringCapital(mystring) {
//     return mystring[0];
// };
// console.log(stringCapital("dsfkjbgs")
// );
// const Object1 = {
//     key1:1,
//     key2:2,
//     key3:3,
//     key4:4,
//     key5:5
// }
// const arr = Object.keys(Object1);
// function noEqual(array, target) {
//     for (let i = 0; i < array.length; i++) {
//         if (Object1[array[i]]===target) {
//             return i;
//         } 
//     }
//     return -1;
// }

// console.log(noEqual(arr,4));
// console.log(arr);