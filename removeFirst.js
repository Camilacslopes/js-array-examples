// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result


function removeFirst(a) {
  return a.slice(3);
}


console.log(removeFirst([1,2,3,4]))                    //[4]
console.log(removeFirst([5,4,3,2,1,0]))                //[2.1.0] 
console.log(removeFirst([99,1,1]))                     //[]
