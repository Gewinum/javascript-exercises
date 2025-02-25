function isPositive(x) {
    if (typeof x !== 'number') {
        throw new TypeError('parameter type is not a Number');
    }

    return x > 0;
}

console.log(isPositive(-3))
console.log(isPositive(3))

try {
    isPositive('s');
}
catch (e) {
    console.error(e);
}

const inputArr = [1, 2, -4, 3, -9, -1, 7];
const resultArr = inputArr.filter(x => isPositive(x));
console.log(resultArr);