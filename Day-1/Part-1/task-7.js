let arr = [1,2,3,4];
console.log("sum is " + arr.filter(i => i % 2 === 0).reduce((a, b) => a + b));