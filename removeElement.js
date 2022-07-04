// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array

function removeElement(a, b) {
    return a.filter((i) => i !== b); 
}

console.log(removeElement([1,2,3], 2))            //[ 1, 3 ]
console.log(removeElement([1,2,'2'], '2'))        //[ 1, 2 ]
console.log(removeElement([false,'2',1], false))  //[ '2', 1 ]
console.log(removeElement([1,2,'2',1], 1))        //[ 2, '2' ]




