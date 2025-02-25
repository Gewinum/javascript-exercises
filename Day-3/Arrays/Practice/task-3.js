function every(array, callback) {
    if (!Array.isArray(array)) {
        throw new TypeError('provided first argument must be an array');
    }
    if (callback.constructor !== Function) {
        throw new TypeError('callback must be a function');
    }

    for (let i = 0; i < array.length; i++) {
        const response = callback(array[i], i, array);
        if (Boolean(response) === false) {
            return false;
        }
    }

    return true;
}

const arr = [1,2,3];
console.log(every(arr, function(item, i, arr) {
    return typeof item === "number";
}));