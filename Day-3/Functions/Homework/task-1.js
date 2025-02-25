function mix(...args) {
    let result;
    const errors = [];
    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        try {
            if (typeof arg !== 'function') {
                throw new TypeError('all args must be a function');
            }

            if (result === undefined) {
                result = arg();
            } else {
                result = arg(result);
            }
        } catch (e) {
            errors.push({
                name: e.name,
                message: e.message,
                stack: e.stack,
                level: i
            });
        }
    }
    return {
        errors: errors,
        value: result
    };
}

const result = mix(() => {
    return 0;
}, (prev) => {
    return prev + 1;
}, (prev) => {
    throw new RangeError('Range is wrong');
}, (prev) => {
    return prev * 3;
});
console.log(result);