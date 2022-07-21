// Write a function that takes an array of numbers as argument
// It should return the sum of the numbers

function sumArray(a) {
  return a.reduce((acc, cur) => acc + cur)
}

console.log(sumArray([10,100,40]))          //150
console.log(sumArray([10,100,1000,1]))      //1111
console.log(sumArray([-50,0,50,200]))       //200
