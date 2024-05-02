// nested destructuring 
// const users = [
//     {userId: 1,firstName: 'harshit', gender: 'male'},
//     {userId: 2,firstName: 'mohit', gender: 'male'},
//     {userId: 3,firstName: 'nitish', gender: 'male'},
// ]

// const [{firstName: user1firstName, userId}, , {gender: user3gender}] = users;
// console.log(user1firstName);
// console.log(userId);
// console.log(user3gender);

//my code 
const users = [
    {userId: 1,firstName: 'harshit', gender: 'male'},
    {userId: 2,firstName: 'mohit', gender: 'male'},
    {userId: 3,firstName: 'nitish', gender: 'male'},
]
//as we se see in above array that three object has same key so that why in nest destructuring we have to save these keys in diff var to print
const [{firstName:var1,userId:user1},{firstName:var2,userId:user2},{firstName:var3,userId:user3}] = users;
// const [user1,user2,user3] = users;
console.log(var1,user1,var2,user2,var3,user3);