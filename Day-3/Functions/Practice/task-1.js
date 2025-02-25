function mix(...args) {
    let result;
    args.forEach(arg => {
        if (typeof arg !== 'function') {
            throw new TypeError('all args must be a function');
        }

        if (result === undefined) {
            result = arg();
        } else {
            result = arg(result);
        }
    });

    return result;
}

const result = mix(() => {
    return 0;
}, (prev) => {
    return prev + 1;
}, (prev) => {
    return prev * 2;
}) // 2

console.log(result);