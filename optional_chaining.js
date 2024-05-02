// optional chaining 

const user  = {
    firstName: "harshit",
    // address: {houseNumber: '1234'}
}



console.log(user?.firstName);
console.log(user?.address?.houseNumber);  //this statement can be read as if there is user(object) and if there is address(key) in a user &if address(key) has an object in which there is a key named as house_no then print that house no 