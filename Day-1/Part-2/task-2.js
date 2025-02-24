let x = 1000;
const divider = 2;
const limit = 50;

let num = 0;

while (x > limit) {
    num += 1;
    x = x / divider;
}

console.log("result number is " + x);
console.log("iterations amount is " + num)