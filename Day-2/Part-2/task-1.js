function getDivisors(x) {
    if (typeof x !== 'number') {
        throw new TypeError('parameter type is not a Number');
    }

    if (x <= 0) {
        throw new Error('parameter must be a positive integer');
    }

    const divisors = [];

    for (let i = 1; i <= x; i++) {
        if (x % i === 0) {
            divisors.push(i);
        }
    }

    return divisors;
}

console.log(getDivisors(12));

try {
    getDivisors('Content');
}
catch (e) {
    console.error(e);
}

try {
    getDivisors(0);
}
catch (e) {
    console.error(e);
}