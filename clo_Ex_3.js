function func(){
    let counter = 0;
    return function(){
        if(counter < 1){
            console.log("Hi You Called me");
            counter++;
        }else{
            console.log("Mai already ek bar call ho chuka hoon!");
        }
    }
}

const myFunc = func();
myFunc();
myFunc();



// //my code
// function func() {
//     let i = 0;
//     return function () {
//         if (i === 0) {
//             i++;
//             console.log("shehroz");

//         }else{
//             console.log("alredy called");
//         }
//     }
// }
// const myFunc = func();
// myFunc();
// myFunc();

// const myFunc2 = func();
// myFunc2();
// myFunc2();