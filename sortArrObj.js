// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array

function sortArrObj(arr) {
  return arr.sort((a, b) => parseFloat(a.a) - parseFloat(b.b));
}

console.log(sortArrObj([{a:1,b:2},{a:5,b:4}]))             //[{a:1,b:2},{a:5,b:4}]
console.log(sortArrObj([{a:2,b:10},{a:5,b:4}]))             //[{a:5,b:4},{a:2,b:10}]
console.log(sortArrObj([{a:1,b:7},{a:2,b:1}]))             //[{a:2,b:1},{a:1,b:7}]
