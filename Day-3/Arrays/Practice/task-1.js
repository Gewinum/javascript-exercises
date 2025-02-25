function forEach(array, callback) {
    if (!Array.isArray(array)) {
        throw new TypeError('provided first argument must be an array');
    }
    if (callback.constructor !== Function) {
        throw new TypeError('callback must be a function');
    }

    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

const arr = [1,2,3];
forEach(arr, function(item, i, arr) {
    console.log(item);
});
try {
    forEach("something", function(item, i, arr) {
        console.log(item);
    });
} catch (e) {
    console.error(e);
}

try {
    forEach(arr, "wrong");
} catch (e) {
    console.error(e);
}
