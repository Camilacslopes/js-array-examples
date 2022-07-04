// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'

function nthElement(a, n){
  return a[n-1]
}

console.log(nthElement([1,2,3,4,5],3))  //3
console.log(nthElement([10,9,8,7,6],5)) //6
console.log(nthElement([7,2,1,6,3],1))  //7
