// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array

function getFirst(a) {
  return a.slice(0, 3);
}

console.log(getFirst([1,2,3,4]))                         //[ 1, 2, 3 ]
console.log(getFirst([5,4,3,2,1,0]))                     //[ 5, 4, 3 ]
console.log(getFirst([99,1,1]))                          //[ 99, 1, 1 ]
