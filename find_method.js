// find method 

// const myArray = ["Hello", "cat", "dog", "lion"];

// function isLength3(string){
//     return string.length === 3;
// }

// const ans = myArray.find((string)=>string.length===3); //only cat willl be print due its 1st ocurrence as compare to dog
// console.log(ans);

const users = [
    {userId : 1, userName: "harshit"},
    {userId : 2, userName: "harsh"},
    {userId : 3, userName: "nitish"},
    {userId : 4, userName: "mohit"},
    {userId : 5, userName: "aaditya"},
];

const myUser = users.find((user)=>user.userId===3);
console.log(myUser);

// //my code
// const users = [
//     {userId : 1, userName: "harshit"},
//     {userId : 2, userName: "harsh"},
//     {userId : 3, userName: "nitish"},
//     {userId : 4, userName: "mohit"},
//     {userId : 5, userName: "aaditya"},
// ];

// const ans  = users.find((user)=>user.userId === 4);
// console.log(ans);