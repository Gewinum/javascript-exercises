function isEven(x) {
    if (typeof x !== 'number') {
        throw new TypeError('parameter type is not a Number');
    }

    return x % 2 === 0;
}

console.log(isEven(3));
console.log(isEven(4));

try {
    isEven('Content');
}
catch (e) {
    console.error(e);
}