function filter(array, callback) {
    if (!Array.isArray(array)) {
        throw new TypeError('provided first argument must be an array');
    }
    if (callback.constructor !== Function) {
        throw new TypeError('callback must be a function');
    }
    const resultArr = [];
    for (let i = 0; i < array.length; i++) {
        const response = callback(array[i], i, array);
        if (Boolean(response) === true) {
            resultArr.push(array[i]);
        }
    }

    return resultArr;
}

const arr = [1,2,3];
const result = filter(arr, function(item, i, arr) {
    return item !== 2;
});

console.log(result);