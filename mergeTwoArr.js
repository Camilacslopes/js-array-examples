
// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

function mergeTwoArr(a, b) {
  return [...new Set([...a,...b])].sort((x, y) => x - y);
}

console.log(mergeTwoArr([1, 2, 3], [3, 4, 5]));                        //[ 1, 2, 3, 4, 5 ]                       
console.log(mergeTwoArr([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));      //[ -11, -10, 5, 22, 41,  42, 333]


