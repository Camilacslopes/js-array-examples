// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

function mergeArrays(...arrays) {
  return [].concat(...arrays)
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]))                //[ 1, 2, 3, 4, 5, 6 ]
console.log(mergeArrays(['a', 'b', 'c'], [4, 5, 6]))          //[ 'a', 'b', 'c', 4, 5, 6 ]
console.log(mergeArrays([true, true], [1, 2], ['a', 'b']))    //[ true, true, 1, 2, 'a', 'b' ]
