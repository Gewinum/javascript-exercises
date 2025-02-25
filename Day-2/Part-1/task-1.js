function f(side) {
    if (typeof side !== 'number') {
        throw new TypeError("parameter type is not a Number")
    }

    return Math.pow(side, 3);
}

console.log(f(2));

try {
    f('Content')
}
catch (e) {
    console.error(e);
}