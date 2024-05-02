"use strict";
// console.log(window); 
console.log(this);  //this can still access window object if it is inside some func then it can not
//means
function myFunc(){
         console.log(this);    //this will not access window object because of "use strict" (it is only workable inside the func)
}
window.myFunc(); //we can also called any func like this
