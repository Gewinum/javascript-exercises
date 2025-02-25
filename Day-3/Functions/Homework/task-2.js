function compose(...args) {
    if (args.length === 0) {
        throw new Error('args must not be empty');
    }
    return function(arg) {
        while (args.length !== 0) {
            const funcToCall = args.pop();
            if (funcToCall.constructor !== Function) {
                throw new TypeError('all args must be functions');
            }
            arg = funcToCall(arg);
        }

        return arg;
    };
}

const result = compose((str) => {
    return str + 'c';
}, (str) => {
    return str + 'b';
})('a');
console.log(result);