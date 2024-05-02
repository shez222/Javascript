let a  = [2,4,8,10,14];
let  i = 0;
let number = a[0];
function missing_value(index,n,array) { 
    
    if (n === array[index]) {
        //n=n+2
        missing_value(index+1,n+2,array)
    }
    else{
        console.log(`first missing value is ${n}`);        
    }
}

missing_value(i,number,a);