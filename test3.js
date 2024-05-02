function triangle(rows,a =" ") {
    for (let i = 0; i <= rows; i++) {
       for (let j = 0; j <= rows - i; j++) {
       a += " "        
       }
       for (let k = 0; k < (2*i)-1; k++) {
        a += "*"
       }
       //ind++;
        a += "\n"   
       }
       return a;
}



const b = triangle(10);
console.log( b);