function longestString( arr ) {
  return arr.reduce((a, b) => a.length <= b.length ? b : a)
}

console.log(longestString(['help', 'me']))           //'help'
console.log(longestString(['I', 'need', 'candy']))   //'candy'
    