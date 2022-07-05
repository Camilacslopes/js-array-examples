// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order

function sortDesc( arr ) {
  return arr.sort((a, b) => b - a)
}

console.log(sortDesc([1,3,2]))     //[3,2,1]
console.log(sortDesc([4,2,3,1]))   //[4,3,2,1]
