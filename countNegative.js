// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array

function countNegative(a) {
  return a.filter((el) => el < 0).length;
}

console.log(countNegative([1,-2,2,-4]))    //2
console.log(countNegative([0,9,1]))        //0
console.log(countNegative([4,-3,2,1,0]))   //1