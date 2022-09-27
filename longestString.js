// Write a function that takes an array of strings as argument
// Return the longest string

function longestString( arr ) {
  return arr.reduce((a, b) => a.length <= b.length ? b : a)
}

console.log(longestString(['help', 'me']))           //'help'
console.log(longestString(['I', 'need', 'candy']))   //'candy'
    