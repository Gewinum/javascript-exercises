const arr = [10, -54, 50, 23, -12];
let sum = 0;

arr.forEach(i => {
    if (i > 0) {
        sum += i;
    }
    // or
    // if (Math.abs(i) === i) {
    //     sum += i;
    // }
})

console.log(sum);