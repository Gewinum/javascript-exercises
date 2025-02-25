function arrayFill(element, amount) {
    if (!['object', 'number', 'string'].includes(typeof element)) {
        throw new TypeError("element should be either an object, or a number or a string")
    }

    if (typeof amount !== 'number') {
        throw new TypeError("amount should be a number");
    }

    const resultArr = [];
    for (let i = 0; i < amount; i++) {
        resultArr.push(element);
    }

    return resultArr;
}

console.log(arrayFill('x', 5));