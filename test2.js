// let a  = [2,4,8,10,14];
// function array_sum(arr) {
//   total_sum = 0;
//   for (let i = 0; i <= arr.length-1; i++) {
//     total_sum = total_sum + arr[i];
    
//   }
//   return total_sum
// }

// function complete_arr_sum(arr,diff) {
//   let a  =[];
//   let start = arr[0];
//   let end = arr[arr.length-1]
//   for (let i = start; i <=end; i+=diff) {
//     a.push(i)
//   }
//    a = array_sum(a);
//   return a
// }
// function missing_values_sum(arr,diff) {
//   let missing_value_arr_sum = array_sum(arr);
//   let completed_arr_sum = complete_arr_sum(arr,diff);
//   missing_values_sum = completed_arr_sum - missing_value_arr_sum;
//   return missing_values_sum;
// }

// let ans = missing_values_sum(a,2)
// console.log(ans);

function find_Missing_Number(arr,diff) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    // If the missing number is on the right side of the midpoint
    if (arr[mid] - arr[0] == mid * diff) {  //asal diff jo hona chahiya tha mid index talak  = mid * diff  and jo actual diff ha given array ma till mid index= arr [mid] -arr[0]
      low = mid + 1;
    }
    // If the missing number is on the left side of the midpoint
    else {
      high = mid - 1;
    }
  }

  // Calculating the missing number based on the last mid value
  // console.log(arr[high]);
  return arr[high] + diff;
}

let arr = [2,6,10,12,14,18,20];
let missing_Number = find_Missing_Number(arr,2);
console.log(`first missing number is ${missing_Number}`);
