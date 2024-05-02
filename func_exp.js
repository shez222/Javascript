//mycode
const stringCapital = function(mystring) {
    return mystring[0];
};
console.log(stringCapital("dsfkjbgs"));
const Object1 = {
    key1:1,
    key2:2,
    key3:3,
    key4:4,
    key5:5
}
const arr = Object.keys(Object1);
const noEqual = function (array, target) {
    for (let i = 0; i < array.length; i++) {
        if (Object1[array[i]]===target) {
            return i;
        } 
    }
    return -1;
}

console.log(noEqual(arr,4));
console.log(arr);