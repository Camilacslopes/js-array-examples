// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result

function alphabeticallyOrder( arr ) {
  return arr.sort()
}

console.log(alphabeticallyOrder(['b', 'c', 'd', 'a']))                  //['a', 'b', 'c', 'd']
console.log(alphabeticallyOrder(['z', 'c', 'd', 'a', 'y', 'a', 'w']))   //['a', 'a', 'c', 'd', 'w', 'y', 'z']
