const arr = [10, -54, 50, 23, -12];
console.log(arr.filter(i => i > 0).reduce((a, b) => a + b));