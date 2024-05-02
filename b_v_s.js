// block scope vs function scope 


// let and const are block scope
// var is function scope
//block scope
{
    let firstName = "shehroz"
    console.log(firstName);     //these let keyword var can only be access inside the var
}
// console.log(firstName); //cannot be access screens error
{
    const firstName = "bilal"
    console.log(firstName);  //these const keyword var can only be access inside the var
}
//func scope
// if(true){
//     var firstName = "harshit";
//     console.log(firstName);
// }

// console.log(firstName);

function myApp(){
    if(true){
        var firstName = "harshit";
        console.log(firstName);
    }

    if(true){
        console.log(firstName);
    }
    console.log(firstName);
}

myApp();