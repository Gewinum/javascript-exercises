function f(...args) {
    return args.reduce((a, b) => {
        if (typeof b !== 'number') {
            throw new TypeError('all parameters type should be a number');
        } else {
            return a + b;
        }
    });
}

console.log(f(1, 2, 3));
console.log(f(1,1,1,1,1,1,1,1));

try {
    f(1,2,'s',4);
}
catch (e) {
    console.error(e);
}