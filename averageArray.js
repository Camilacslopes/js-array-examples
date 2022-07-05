// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

function myAverage( arr ) {
  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length
}


console.log(myAverage([10,100,40]))     //50
console.log(myAverage([10,100,1000]))   //370
console.log(myAverage([-50,0,50,200]))  //50
