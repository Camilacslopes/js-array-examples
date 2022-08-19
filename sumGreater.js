function sumGreater(a, b) {
  return a.filter((el) => el > b).reduce((a, b) => a + b, 0);
}

console.log(sumGreater([1, 2, 3, 4, 5, 6, 7], 2))          //25
console.log(sumGreater([-10, -11, -3, 1, -4], -3))         //1
console.log(sumGreater([78, 99, 100, 101, 401], 99))       //602

