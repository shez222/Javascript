// lexical scope 
const myVar = "value1"; //lexical scope of variable

function myApp(){
    

    function myFunc(){
        // const myVar = "value59";
        const myFunc2 = () =>{
            console.log("inside myFunc", myVar);
        }
        myFunc2();
    }


    console.log(myVar);
    myFunc();
}

myApp();

// //my code
// const myVar = "value";
// function myApp() {
//     const myFunc = ()=>{
//        const myFunc2 =()=>{
//         console.log("jshkhs",myVar);
//        }
//        myFunc2();
//     }
//     myFunc();
// }
// myApp();