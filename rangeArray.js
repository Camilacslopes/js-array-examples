function rangeArray(min, max) {
  let arr = [];
    for (let i = min; i <= max; i++) {
      arr.push(i);
    }
  return arr;
}

console.log(rangeArray(2,10));       //[2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(rangeArray(1,3));       //[1, 2, 3]
console.log(rangeArray(-5,5));      //[-5, -4, -3, -2, -1, 0,  1,  2,  3,  4, 5]
console.log(rangeArray(2,7));       //[2, 3, 4, 5, 6, 7]


