// Write a function that takes an array (a) as argument
// Extract the last 3 elements of 'a'
// Return the resulting array

function getLast(a) {
  return a.slice(0-3)
}


console.log(getLast([1,2,3,4]))               //[2,3,4]
console.log(getLast([5,4,3,2,1,0]))           //[2,1,0]
console.log(getLast([99,1,1]))                //[99,1,1]
