// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

function checkEqual( arr ) {
  return new Set(arr).size === 1
}

console.log(checkEqual([true, true, true, true]))                    //true
console.log(checkEqual(['test', 'test', 'test']))                    //true
console.log(checkEqual([1,1,1,2]))                                   //false
console.log(checkEqual(['10',10,10,10]))                             //false
