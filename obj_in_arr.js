// objects inside array 
// very useful in real world applications

const users = [
    {userId: 1,firstName: 'harshit', gender: 'male'},
    {userId: 2,firstName: 'mohit', gender: 'male'},
    {userId: 3,firstName: 'nitish', gender: 'male'},
]
for(let user of users){
    console.log(user.firstName);
}
//mycode
// const users= [
//     {userID:1, name:"sehhroz"},
//     {userID:2, name:"sehhroz"},
//     {userID:3, name:"sehhroz"},

// ];
// for (const user of users) {
//     console.log(user.userID);
//     console.log(user.name);
// }